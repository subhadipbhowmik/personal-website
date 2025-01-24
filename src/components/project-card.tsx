import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface ProjectLink {
  icon: React.ReactNode;
  type: string;
  href: string;
}

interface Props {
  title: string;
  href?: string;
  projectType?: string;
  description: string;
  dates: string;
  tags?: string[];
  link?: string;
  image?: string;
  video?: string;
  links?: ProjectLink[];
  className?: string;
}

export function ProjectCard({
  title,
  href = "#",
  description,
  dates,
  projectType,
  tags = [],
  link,
  image,
  video,
  links = [],
  className = "",
}: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
      <Link
        target="_blank"
        href={href}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={`${title} project preview`}
            width={500}
            height={300}
            className="h-40 w-full object-cover px-3 py-2 rounded-lg"
          />
        )}
      </Link>

      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          {link && (
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                .replace("https://", "")
                .replace("www.", "")
                .replace("/", "")}
            </div>
          )}
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={`${link.type}-${idx}`}
                target="_blank"
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
