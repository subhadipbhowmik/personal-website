import React from 'react';
import Image from 'next/image';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react'; // Import icons
import { ALL_COURSES } from '../../../public/certifications/ALL_COURSES';
import { DATA } from '@/data/resume'; // Assuming you have this data available

export const metadata = {
  title: 'Certifications',
  description: 'My Professional Achievements',
};

const BLUR_FADE_DELAY = 0.1;

const Certifications = () => {
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
                text={DATA.certification} // You can change this to something specific for certifications
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.certificationDesc} // You can also customize this for certifications
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ALL_COURSES.map((course, index) => (
          <BlurFade key={index} delay={index * BLUR_FADE_DELAY}>
            <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <CardContent className="flex flex-col items-center px-2">
                {/* Certificate image at the top */}
                {/* <Image
                  src={course.certificate_image}
                  alt={`Certificate for ${course.course_title}`}
                  width={400}
                  height={160}
                  className="h-40 w-full object-contain rounded-md mt-2"
                /> */}

             <img src={course.certificate_image} alt={`Certificate for ${course.course_title}`} className='h-50 w-full rounded-md mt-2'/>

                {/* Organisation logo and course title in one row */}
                <div className="flex items-center mt-4">
                  <Avatar className="size-12 border"> {/* Reduced size */}
                    <AvatarImage
                      alt={course.organisation_name}
                      src={course.organisation_logo}
                      className="rounded-full h-12 w-12" // Specify height and width
                    />
                    <AvatarFallback>{course.organisation_name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-semibold ml-2">{course.course_title}</CardTitle> {/* Course title */}
                </div>

                {/* Organisation name and issued date in the next row */}
                <div className="flex justify-between w-full mt-2 text-gray-500">
                  <span className="flex items-center">
                    <User className="h-4 w-4 mr-1" /> {/* Organization name icon */}
                    <span>{course.organisation_name}</span>
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" /> {/* Date icon */}
                    <p className="text-sm">Issued: {course.issue_date}</p> {/* Issued date */}
                  </span>
                </div>

                {/* Skills gained section */}
                {course.skills_gained && course.skills_gained.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.skills_gained.map((skill, index) => (
                      <Badge
                        className={`px-2 py-1 rounded ${
                          index % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'
                        }`}
                        key={skill}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="px-2 pb-2">
                <a
                  href={course.credential_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button className="w-full my-2">
                    View Credential
                    <ArrowRight />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
