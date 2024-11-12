'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ExternalLink } from "lucide-react"
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import BlurFade from '@/components/magicui/blur-fade';
import { DATA } from '@/data/resume'; // Assuming you have this data available
const BLUR_FADE_DELAY = 0.1

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
    <div className="min-h-screen flex items-center justify-center pb-12">
      <Card className="w-full max-w-2xl">
        
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8 mb-6">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl pb-1 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                  yOffset={8}
                  text="Meeting Scheduled"
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text="Your meeting details are below"
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* Meeting Details */}
        <CardHeader className="text-center space-y-6">
          <div className="mx-auto size-12 rounded-full bg-emerald-100 flex items-center justify-center">
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