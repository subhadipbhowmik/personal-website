import React from 'react';
import { AlertTriangle } from 'lucide-react'; // Import Lucide icon
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DATA } from "@/data/resume";

export const metadata = {
  title: 'My Journey',
  description: 'This is a little story of my life journey.',
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const BLUR_FADE_DELAY = 0.1;

const MyJourney = () => {
  return (
    <section className="pb-12">
      {/* Hero Section */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 mb-6">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl pb-1 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                yOffset={8}
                text="My Journey"
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text="This is a little story of my life journey."
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>


      {/* Blog Section */}
      <main className="antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                My Journey in Tech
              </h1>
            </header>
            <p className="lead">
              I am a hobbyist software developer and tinkerer from a small village in West Bengal. My journey began
              with curiosity about technology, which has led me to explore various aspects of software development.
            </p>
            <p>
              During my studies, I developed a website called "madhyamikgyan" to help students in West Bengal with
              exam guidance. This experience taught me the importance of HTML, CSS, and JavaScript.
            </p>
            <p>
              My time at Chandigarh University allowed me to participate in hackathons and internships, where I
              secured a position at Next Drive India, focusing on web application development and SEO optimization.
            </p>
            <p>
              Currently, I am working on an Android application called "Examhunt," which I plan to publish soon. My
              goal is to continue growing and contributing to open-source projects while building meaningful
              solutions.
            </p>
          </article>
        </div>
      </main>

            {/* Alert Section */}
            <div className="flex items-center justify-center mt-6 p-2 bg-yellow-100 border border-yellow-300 rounded-lg">
        <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
        <span className="text-yellow-700">
          This page will always be under construction. I will keep adding stories here as I continue my journey.
        </span>
      </div>


    </section>
  );
};

export default MyJourney;
