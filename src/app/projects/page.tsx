import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.1;

export const metadata = {
  title: "My Projects",
  description:
    "These are the projects I have worked on. Some of them are personal projects, some are open-source projects, and some are client projects.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// Group projects by projectType
const groupProjectsByType = (projects: any) => {
  return projects.reduce((acc: any, project: any) => {
    if (!acc[project.projectType]) {
      acc[project.projectType] = [];
    }
    acc[project.projectType].push(project);
    return acc;
  }, {});
};

const Projects = () => {
  // Group projects by their type
  const groupedProjects = groupProjectsByType(DATA.projects);

  return (
    <>
      <div className="mx-auto w-full pb-12">
        {/* Hero Section */}
        <section id="hero">
          <div className="mx-auto w-full mb-6">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                  yOffset={8}
                  text={DATA.projectText}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.projectTextDesc}
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

        {/* Projects Sections */}
        {Object.keys(groupedProjects).map((projectType, index) => (
          <div key={projectType} className="mb-10">
            {/* Section Heading */}
            <BlurFade delay={BLUR_FADE_DELAY * index}>
              <h2 className="text-2xl font-semibold mb-4">
                {projectType} Projects
              </h2>
            </BlurFade>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {groupedProjects[projectType].map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
