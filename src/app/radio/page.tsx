'use client'

import React, { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, SkipBack, SkipForward, Shuffle, Volume2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'
import BlurFade from '@/components/magicui/blur-fade'
import BlurFadeText from '@/components/magicui/blur-fade-text'
import { DATA } from "@/data/resume"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'

const BLUR_FADE_DELAY = 0.1;

const RadioStation = () => {
  const [songs, setSongs] = useState<any[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("/api/songs")
        if (!response.ok) {
          throw new Error("Failed to fetch songs")
        }
        const data = await response.json()
        setSongs(data)
      } catch (error) {
        console.error("Error fetching songs:", error)
      }
    }
    fetchSongs()
  }, [])

  const playSong = () => {
    console.log('Play button clicked');
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const pauseSong = () => {
    console.log('Pause button clicked');
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const nextSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length)
  }

  const prevSong = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length)
  }

  const randomSong = () => {
    const randomIndex = Math.floor(Math.random() * songs.length)
    setCurrentIndex(randomIndex)
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    if (audioRef.current) {
      audioRef.current.volume = volumeValue
    }
  }

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      console.log('Playing song:', currentIndex);
      audioRef.current.play()
    }
  }, [currentIndex, isPlaying])

  if (songs.length === 0) return <p className="text-center text-white">Loading...</p>

  const currentSong = songs[currentIndex]

  return (
    <div className="mx-auto w-full pb-12">
      <section id="hero">
        <div className="mx-auto w-full mb-6">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                yOffset={8}
                text={DATA.radio}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.radioDesc}
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

      <section className="radio-station flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSong.id}
                  src={currentSong.albumArt}
                  alt="Album Art"
                  className="w-full h-64 md:h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between bg-gradient-to-br from-emerald-400 to-indigo-600">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Dev Beats 🎵</h1>
                <p className="text-lg text-emerald-100 mb-8">Boost productivity with curated tracks.</p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSong.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-white mb-2">{currentSong.title}</h2>
                    <p className="text-xl text-emerald-200">{currentSong.artist}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <audio ref={audioRef} src={currentSong.audioSrc} preload="metadata" />
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <Button variant="ghost" size="icon" onClick={prevSong} className="text-white hover:text-emerald-300 hover:bg-white/10">
                    <SkipBack className="h-6 w-6" />
                  </Button>

                  <Button variant="ghost" size="icon" onClick={isPlaying ? pauseSong : playSong} className="text-white m-2 hover:text-emerald-300 hover:bg-white/10">
                  
                  {isPlaying ? (
                  <Pause className="h-8 w-8" />
                  ) : (
                  <Play className="h-8 w-8" />
                  )}
                  </Button>

                  
                  <Button variant="ghost" size="icon" onClick={nextSong} className="text-white hover:text-emerald-300 hover:bg-white/10">
                    <SkipForward className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="icon" onClick={randomSong} className="text-white roundfu hover:text-emerald-300 hover:bg-white/10">
                    <Shuffle className="h-5 w-5" />
                  </Button>
                  <Volume2 className="h-5 w-5 text-white" />
                  <Slider
                    value={[volume]}
                    max={1}
                    step={0.01}
                    onValueChange={handleVolumeChange}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default RadioStation
