'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ExternalLink, Calendar, MapPin, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { DATA } from '@/data/resume'

const ANIMATION_DURATION = 0.5
const STAGGER_DELAY = 0.1

const MotionCard = motion(Card)
const MotionCardHeader = motion(CardHeader)
const MotionCardContent = motion(CardContent)
const MotionCardFooter = motion(CardFooter)

const BookingSuccessContent = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const email = searchParams.get('email')
  const title = searchParams.get('title')
  const description = searchParams.get('description')
  const startTime = searchParams.get('startTime')
  const endTime = searchParams.get('endTime')
  const location = searchParams.get('location')
  const hostName = searchParams.get('hostName')
  const attendeeName = searchParams.get('attendeeName')

  const formattedStartTime = startTime ? new Date(startTime) : null
  const formattedEndTime = endTime ? new Date(endTime) : null

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
    <div className="min-h-screen flex items-center justify-center lg:p-12 pb-12">
      <MotionCard 
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl overflow-hidden shadow-lg dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: ANIMATION_DURATION }}
      >
        <MotionCardHeader 
          className="text-center space-y-4 sm:space-y-6 bg-gradient-to-r from-emerald-400 to-indigo-600 text-white dark:from-emerald-600 dark:to-indigo-800 p-6 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: ANIMATION_DURATION, duration: ANIMATION_DURATION }}
        >
          <motion.div 
            className="mx-auto size-16 sm:size-20 rounded-full bg-white flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY, duration: ANIMATION_DURATION, type: 'spring' }}
          >
            <Check className="size-8 sm:size-10 text-emerald-600" />
          </motion.div>
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 2, duration: ANIMATION_DURATION }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Meeting Scheduled</h1>
            {email && (
              <p className="text-sm sm:text-base text-emerald-100">
                We've sent an email with a calendar invitation to all participants.
              </p>
            )}
          </motion.div>
        </MotionCardHeader>

        <MotionCardContent 
          className="space-y-6 sm:space-y-8 p-6 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 3, duration: ANIMATION_DURATION }}
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 4, duration: ANIMATION_DURATION }}
            >
              <Calendar className="size-6 text-white bg-indigo-600 dark:bg-indigo-400 p-1 rounded-full flex-shrink-0" />
              <div>
                <div className="font-semibold text-base sm:text-lg dark:text-white">{title}</div>
                {description && <div className="text-sm text-muted-foreground dark:text-gray-300">{description}</div>}
              </div>
            </motion.div>
            
            {formattedStartTime && (
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 5, duration: ANIMATION_DURATION }}
              >
                <div className="size-6 flex items-center justify-center bg-emerald-600 dark:bg-emerald-400 rounded-full flex-shrink-0">
                  <div className="size-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-sm sm:text-base dark:text-white">{formatDateTime(formattedStartTime)}</div>
                  {formattedEndTime && (
                    <div className="text-xs sm:text-sm text-muted-foreground dark:text-gray-300">
                      to {formatDateTime(formattedEndTime)}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 6, duration: ANIMATION_DURATION }}
            >
              <Users className="size-6 text-white bg-indigo-600 dark:bg-indigo-400 p-1 rounded-full flex-shrink-0" />
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <Avatar className="size-8">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium text-sm sm:text-base dark:text-white">{hostName}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground dark:text-gray-300">Host</div>
                  </div>
                </div>
                {attendeeName && (
                  <div className="flex items-center gap-2">
                    <Avatar className="size-8">
                      <AvatarFallback>{attendeeName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm sm:text-base dark:text-white">{attendeeName}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground dark:text-gray-300">Attendee</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
            
            {location && (
              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 7, duration: ANIMATION_DURATION }}
              >
                <MapPin className="size-6 text-white bg-indigo-600 dark:bg-indigo-400 p-1 rounded-full flex-shrink-0" />
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base dark:text-white">{location}</span>
                  {location.includes('Meet') && (
                    <ExternalLink className="size-4 text-muted-foreground" />
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </MotionCardContent>

        <MotionCardFooter 
          className="p-6 sm:p-8 pt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ANIMATION_DURATION + STAGGER_DELAY * 8, duration: ANIMATION_DURATION }}
        >
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-gradient-to-r from-emerald-500 to-indigo-600 text-white hover:from-emerald-600 hover:to-indigo-700 dark:from-emerald-600 dark:to-indigo-800 dark:hover:from-emerald-700 dark:hover:to-indigo-900 transition-all duration-300"
          >
            Back to Dashboard
          </Button>
        </MotionCardFooter>
      </MotionCard>
    </div>
  )
}

export default function BookingSuccess() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="size-12 border-4 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400">Loading booking details...</p>
        </div>
      </div>
    }>
      <BookingSuccessContent />
    </Suspense>
  )
}