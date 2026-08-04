"use client";
import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA, PROFILES } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

function Profiles() {
  return (
    <div className="mx-auto w-full pb-12">
      {/* Hero */}
      <section id="hero" className="mb-10">
        <div className="mx-auto w-full">
          <div className="flex justify-between items-start gap-4">
            <div className="flex flex-col flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                yOffset={8}
                text={DATA.profile}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.profileDesc}
              />
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="flex flex-col items-center gap-3">
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
                <Link
                  target="_blank"
                  href="https://cal.com/shubhadip-bhowmik/book-meeting"
                  className="py-1 px-4 text-white text-sm font-medium bg-gradient-to-r from-emerald-400 to-indigo-600 rounded-full hover:opacity-90 transition-opacity"
                >
                  Book a call
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROFILES.map((profile, index) => (
          <BlurFade key={profile.id} delay={BLUR_FADE_DELAY * (index + 3)}>
            <div
              className={`rounded-xl border-2 ${profile.border} bg-white dark:bg-neutral-900 p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200`}
            >
              {/* Top row: icon + platform + handle */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-gray-50 dark:bg-neutral-800 flex items-center justify-center shrink-0 p-2">
                  <Image
                    src={profile.icon}
                    alt={profile.platform}
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {profile.platform}
                  </p>
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">
                    {profile.handle}
                  </h3>
                </div>
              </div>

              {/* About */}
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                {profile.about}
              </p>

              {/* CTA */}
              <Link
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`self-start text-sm font-medium text-white bg-gradient-to-r ${profile.accent} px-4 py-1.5 rounded-lg hover:opacity-90 transition-opacity`}
              >
                {profile.btnText}
              </Link>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}

export default Profiles;
