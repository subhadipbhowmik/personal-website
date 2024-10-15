import React from 'react';
import Image from 'next/image';
import BlurFade from '@/components/magicui/blur-fade';
import { ALL_IMAGES } from '../../../public/memories/ALL_IMAGES';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata = {
  title: "Memories",
  description: "I Love to Capture Past",
};

const BLUR_FADE_DELAY = 0.1;

const Memories: React.FC = () => {
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
                  text={DATA.memories}
                />
                 <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.memoriesDesc}
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
          {ALL_IMAGES.map((image, index) => (
            <BlurFade key={index} delay={index * BLUR_FADE_DELAY}>
              <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2">
                <Image
                  src={image.imageUrl}
                  alt={image.imageTitle}
                  width={320}
                  height={240}
                  className=" object-cover w-full h-60 md:h-70 lg:h-80 transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{image.imageTitle}</h2>
                  <p className="text-gray-600">{image.imageDesc}</p>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Memories;
