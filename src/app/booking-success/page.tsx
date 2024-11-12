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
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <Card className="w-full max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105">
        <CardHeader className="text-center space-y-6 p-6">
          <div className="mx-auto size-12 rounded-full bg-emerald-600 flex items-center justify-center p-3 shadow-xl">
            <Check className="size-6 text-white" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-800">Your meeting is scheduled!</h1>
            {email && (
              <p className="text-gray-600 text-lg">
                We’ve sent a calendar invitation with all the details to everyone.
              </p>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <div className="font-semibold text-gray-700">What</div>
              <div className="text-lg font-medium text-gray-800">{title}</div>
            </div>
            {description && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-semibold text-gray-700">Description</div>
                <div className="text-gray-600">{description}</div>
              </div>
            )}
            {formattedStartTime && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-semibold text-gray-700">When</div>
                <div className="text-lg text-gray-800">
                  <div>{formatDateTime(formattedStartTime)}</div>
                  {formattedEndTime && (
                    <div className="text-gray-600">
                      to {formatDateTime(formattedEndTime)}
                    </div>
                  )}
                </div>
              </div>
            )}
            <div className="grid grid-cols-[100px_1fr] gap-4">
              <div className="font-semibold text-gray-700">Who</div>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-medium">{hostName}</span>
                    <span className="text-xs bg-teal-100 text-teal-600 px-2 py-0.5 rounded-full">Host</span>
                  </div>
                  {email && <div className="text-sm text-gray-600">{email}</div>}
                </div>
                {attendeeName && (
                  <div>
                    <div className="text-lg font-medium">{attendeeName}</div>
                  </div>
                )}
              </div>
            </div>
            {location && (
              <div className="grid grid-cols-[100px_1fr] gap-4">
                <div className="font-semibold text-gray-700">Where</div>
                <div className="flex items-center gap-2 text-lg font-medium text-gray-800">
                  {location}
                  {location.includes('Meet') && (
                    <ExternalLink className="size-4 text-gray-600" />
                  )}
                </div>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="p-6 space-y-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-teal-500 text-white hover:bg-teal-600 rounded-lg py-2 text-lg font-medium shadow-md transition duration-200"
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
        <p className="text-gray-600">Loading booking details...</p>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}
