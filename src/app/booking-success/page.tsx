'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ExternalLink } from "lucide-react"

const BookingSuccessContent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Retrieve query parameters
  const email = searchParams.get('email')
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const startTime = searchParams.get('startTime')
  const endTime = searchParams.get('endTime')
  const location = searchParams.get('location')
  const hostName = searchParams.get('hostName')
  const attendeeName = searchParams.get('attendeeName')

  // Convert times to Date objects
  const formattedStartTime = startTime ? new Date(startTime) : null
  const formattedEndTime = endTime ? new Date(endTime) : null

  // Format the date and time
  const formatDateTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short'
    }).format(date)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/50 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center space-y-6">
          <div className="mx-auto size-12 rounded-full flex items-center justify-center">
            <Check className="size-6 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">This meeting is scheduled</h1>
            {email && (
              <p className="text-muted-foreground">
                We sent an email with a calendar invitation with the details to everyone.
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <div className="font-medium">What</div>
              <div>{title}</div>
            </div>
            {description && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-medium">Description</div>
                <div className="text-muted-foreground">{description}</div>
              </div>
            )}
            {formattedStartTime && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-medium">When</div>
                <div>
                  <div>{formatDateTime(formattedStartTime)}</div>
                  {formattedEndTime && (
                    <div className="text-muted-foreground">
                      to {formatDateTime(formattedEndTime)}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <div className="font-medium">Who</div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span>{hostName}</span>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded">Host</span>
                  </div>
                  {email && <div className="text-sm text-muted-foreground">{email}</div>}
                </div>
                {attendeeName && (
                  <div>
                    <div>{attendeeName}</div>
                  </div>
                )}
              </div>
            </div>
            {location && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-medium">Where</div>
                <div className="flex items-center gap-2">
                  {location}
                  {location.includes('Meet') && (
                    <ExternalLink className="size-4 text-muted-foreground" />
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={() => router.push('/')}
            className="w-full"
          >
            Done
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default function BookingSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading booking details...</p>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}