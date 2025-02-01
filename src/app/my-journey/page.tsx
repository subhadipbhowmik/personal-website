import React from "react";
import { AlertTriangle } from "lucide-react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { DATA } from "@/data/resume";

const MyJourney = () => {
  return (
    <section className="pb-6 sm:pb-8 md:pb-12">
      {/* Hero Section - Updated spacing */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-4 sm:space-y-6 md:space-y-8 mb-4 sm:mb-6">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1 sm:space-y-1.5">
              <BlurFadeText
                delay={0.1}
                className="text-2xl sm:text-3xl pb-1 font-bold tracking-tighter md:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                yOffset={8}
                text="My Journey"
              />
              <BlurFadeText
                className="max-w-[600px] text-base sm:text-lg md:text-xl"
                delay={0.1}
                text="This is a little story of my life journey."
              />
            </div>
            <BlurFade delay={0.1}>
              <Avatar className="size-20 sm:size-24 md:size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>SB</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Enhanced Life Journey Section with responsive spacing */}
      <main className="antialiased">
        <div className="w-full mx-auto">
          {/* Vision & Dreams Section */}
          <div className="mb-2 sm:mb-4 md:mb-6">
            <BlurFadeText
              delay={0.2}
              className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 md:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              text="Vision & Dreams"
            />
            <BlurFade delay={0.3}>
              <div className="grid gap-4 sm:gap-6">
                <Card className="overflow-hidden border-none bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/10 dark:to-pink-950/10">
                  <CardContent className="p-4 sm:p-6">
                    <BlurFadeText
                      delay={0.4}
                      className="text-base sm:text-lg leading-relaxed"
                      text="I believe in the transformative power of technology to create meaningful change. 
                      My vision extends beyond code – it's about building bridges between innovation and human experience, 
                      crafting solutions that make a real difference in people's lives."
                    />
                  </CardContent>
                </Card>
              </div>
            </BlurFade>
          </div>

          {/* Life Philosophy Section */}
          <div className="mb-8 sm:mb-12 md:mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-purple-100/20 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl blur-3xl -z-10" />
            <BlurFadeText
              delay={0.5}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              text="Life Philosophy"
            />
            <div className="grid gap-4 sm:gap-6 md:gap-8">
              <div className="space-y-4 sm:space-y-6">
                <BlurFade delay={0.6}>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                    <BlurFadeText
                      delay={0.7}
                      className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-blue-600 dark:text-blue-400"
                      text="Continuous Growth"
                    />
                    <BlurFadeText
                      delay={0.8}
                      className="text-base sm:text-lg leading-relaxed"
                      text="Every challenge is an opportunity to learn and evolve. I embrace difficulties 
                      as stepping stones to personal and professional growth, constantly pushing my 
                      boundaries to become a better version of myself."
                    />
                  </div>
                </BlurFade>
                <BlurFade delay={0.9}>
                  <div className="p-4 sm:p-6 rounded-xl bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                    <BlurFadeText
                      delay={1.0}
                      className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-purple-600 dark:text-purple-400"
                      text="Impact Through Innovation"
                    />
                    <BlurFadeText
                      delay={1.1}
                      className="text-base sm:text-lg leading-relaxed"
                      text="Technology should serve humanity. My goal is to create solutions that not only 
                      solve technical challenges but also enhance people's lives, making technology 
                      more accessible and meaningful for everyone."
                    />
                  </div>
                </BlurFade>
              </div>
            </div>
          </div>

          {/* Journey Milestones */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <BlurFadeText
              delay={1.2}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
              text="Journey Milestones"
            />
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <BlurFade delay={1.3}>
                <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500" />
                  <BlurFadeText
                    delay={1.4}
                    className="text-lg sm:text-xl font-semibold mb-2 text-emerald-600 dark:text-emerald-400"
                    text="The Beginning"
                  />
                  <BlurFadeText
                    delay={1.5}
                    className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6"
                    text="Started from a small village in West Bengal, armed with nothing but curiosity 
                    and determination. The limitations of my environment became the fuel for my ambition 
                    to explore the vast world of technology."
                  />
                </div>
              </BlurFade>
              <BlurFade delay={1.6}>
                <div className="relative pl-6 sm:pl-8 border-l-2 border-teal-500/30">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-teal-500" />
                  <BlurFadeText
                    delay={1.7}
                    className="text-lg sm:text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400"
                    text="First Creation"
                  />
                  <BlurFadeText
                    delay={1.8}
                    className="text-base sm:text-lg leading-relaxed"
                    text="Building 'madhyamikgyan' was more than just a website – it was my first step 
                    towards using technology to help others. This project taught me that the true 
                    value of coding lies in its ability to solve real problems."
                  />
                </div>
              </BlurFade>
            </div>
          </div>

          {/* Future Aspirations */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <BlurFadeText
              delay={1.9}
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent"
              text="Future Aspirations"
            />
            <BlurFade delay={2.0}>
              <Card className="overflow-hidden border-none bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/10 dark:to-blue-950/10">
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <BlurFadeText
                      delay={2.1}
                      className="text-base sm:text-lg leading-relaxed"
                      text="Looking ahead, I envision creating technology that breaks barriers and opens 
                      new possibilities. My upcoming project, 'Examhunt,' is just the beginning. 
                      I dream of building a portfolio of solutions that not only showcase technical 
                      excellence but also create meaningful social impact."
                    />
                    <BlurFadeText
                      delay={2.2}
                      className="text-base sm:text-lg leading-relaxed"
                      text="My ultimate goal is to inspire others from similar backgrounds, showing them 
                      that with dedication and the right mindset, they can overcome any obstacle 
                      and achieve their dreams in the tech world."
                    />
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
      </main>
    </section>
  );
};

export default MyJourney;
