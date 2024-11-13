import React from 'react';
import Image from 'next/image';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ALL_NOTES } from '../../../public/notes/ALL_NOTES';

const BLUR_FADE_DELAY = 0.1;

export const metadata = {
  title: "Download Notes & Cheatsheets",
  description: "Download Notes & Cheatsheets of Shubhadip Bhowmik for Web Development, Software Development, Computer & Technology",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


const Notes = () => {
  return (
    <>
      <div className="mx-auto w-full pb-12">
        <section id="hero">
          <div className="mx-auto w-full mb-6">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                  yOffset={8}
                  text={DATA.notes}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.notesDesc}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-col-3 gap-4">
          {ALL_NOTES.map((note, index) => (
            <BlurFade key={index} delay={index * BLUR_FADE_DELAY}>
              <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2 p-4">
                <div className="flex justify-center mb-4">
                  <Image
                    src={note.subjectIcon}
                    alt={note.noteTitle}
                    width={60} // Smaller width
                    height={60} // Smaller height
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-lg font-semibold">{note.noteTitle}</h2>
                  <p className="text-gray-600">{note.downloadText}</p>
                  <a
                    href={note.noteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 text-white bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full">
                    GET Notes
                  </a>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </>
  )
}

export default Notes;