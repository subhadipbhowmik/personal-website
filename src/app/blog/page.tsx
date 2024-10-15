import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Markdown from "react-markdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

function truncateText(text: string, charLimit: number) {
  if (text.length > charLimit) {
    return text.slice(0, charLimit) + "...";
  }
  return text;
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section className="pb-12">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 mb-6">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl pb-1 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-indigo-600"
                yOffset={8}
                text={DATA.blog}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
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
      {/* <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block cursor-pointer"
                >
                  {post.metadata.imageUrl && (
                    <Image
                      src={post.metadata.imageUrl}
                      alt={post.metadata.title}
                      width={500}
                      height={300}
                      className="h-40 w-full object-fill rounded-xl object-top p-2"
                    />
                  )}
                </Link>

                <CardHeader className="px-2">
                  <CardTitle className="text-base py-2">
                    {post.metadata.title}
                  </CardTitle>
                  <time className="font-sans text-xs">
                    {post.metadata.publishedAt}
                  </time>
                  <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mt-2">
                    {truncateText(post.metadata.summary, 160)}
                  </Markdown>
                  <div className="mt-4 flex items-center space-x-3">
                    <Image
                      src={"/me.png"}
                      alt={post.metadata.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold">Shubhadip Bhowmik</p>
                      <p className="text-xs text-muted-foreground">
                        Software Developer
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-auto flex flex-col px-2">
                  {post.metadata.tags && post.metadata.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {post.metadata.tags.map((tag: string, index: number) => (
                        <Badge
                          className={`px-1 py-0 text-[10px] ${
                            index % 2 === 0
                              ? "bg-[#22C55E] text-white"
                              : "bg-[#6366F1] text-white"
                          }`}
                          variant="outline"
                          key={tag}
                        >
                          # {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="px-2 pb-2">
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="w-full my-2">
                      Read More
                      <ArrowRight />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </BlurFade>
          ))}
      </div>
    </section>
  );
}
