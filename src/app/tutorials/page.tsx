import React from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ALL_VIDEOS } from './ALL_VIDEOS';
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Eye } from 'lucide-react';
const BLUR_FADE_DELAY = 0.1;

export const metadata = {
    title: "Tutorials",
    description: "I make Tutorials on Web Development, Software Development, Computer & Technology",
};

const TutorialsPage: React.FC = () => {
    return (
        <>
            <div className="mx-auto w-full pb-12">
                <section id="hero">
                    <div className="mx-auto w-full mb-6">
                        <div className="gap-2 flex justify-between">
                            <div className="flex-col flex flex-1 space-y-1.5">
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY}
                                    className="text-3xl pb-1 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                                    yOffset={8}
                                    text={DATA.tutorials}
                                />
                                <BlurFadeText
                                    className="max-w-[600px] md:text-xl"
                                    delay={BLUR_FADE_DELAY}
                                    text={DATA.tutorialsDesc}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
                    {ALL_VIDEOS.map((video, index) => (
                        <BlurFade key={video.vidId} delay={index * BLUR_FADE_DELAY}>
                            <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2">
                                <div className="aspect-w-16 aspect-h-9">
                                    <iframe
                                        className='aspect-video w-full'
                                        src={video.vidUrl.replace('youtu.be', 'www.youtube.com/embed')}
                                        title={video.vidTitle}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen />

                                </div>

                                <div className="p-4 bg-red">
                                    <h2 className="text-sm font-bold leading-4 mb-2">{video.vidTitle}</h2>
                                    <div className='flex items-center justify-between text-sm text-gray-600'>
                                        <div className="flex items-center space-x-1">
                                            <Eye size={16} />
                                            <span>{video.vidViews}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={16} />
                                            <span>{video.vidCreated}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TutorialsPage;
