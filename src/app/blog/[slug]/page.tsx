import { Button } from "@/components/ui/button";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";


export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    imageUrl,
    tags
  } = post.metadata;

  let ogImage = imageUrl
    ? `${DATA.url}${imageUrl}`
    : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    // Additional SEO meta tags
    keywords: tags.join(', '), // Use blog tags as keywords
    robots: "index, follow", // Allow search engine bots to index and follow links
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section id="blog" className="pb-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.imageUrl
              ? `${DATA.url}${post.metadata.imageUrl}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Your Blog Name",
              logo: {
                "@type": "ImageObject",
                url: "https://your-site-url/logo.png" // Include the logo for the publisher
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${DATA.url}/blog/${post.slug}`,
            },
          }),
        }}
      />

      <Link href={'/blog'}>
        <Button className="mb-2">
          Back
          <ChevronLeft />
        </Button>
      </Link>

      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>

{/* Social media sharing buttons */}
{/* Social media sharing buttons */}
<div className="mt-4 flex items-center space-x-4">
<span className="text-sm text-blue-600 font-bold animate-bounce">Share:</span>
  <a
    href={`https://twitter.com/intent/tweet?url=${DATA.url}/blog/${post.slug}&text=${encodeURIComponent(post.metadata.title)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition duration-200"
    aria-label="Share on Twitter"
  >
    <Twitter size={20} />
  </a>


  <a
    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-700 hover:bg-blue-700 hover:text-white transition duration-200"
    aria-label="Share on LinkedIn"
  >
    <Linkedin size={20} />
  </a>

  <a
    href={`mailto:?subject=${encodeURIComponent(post.metadata.title)}&body=${encodeURIComponent(`Check out this blog post: ${DATA.url}/blog/${post.slug}`)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition duration-200"
    aria-label="Share via Email"
  >
    <Mail size={20} />
  </a>
</div>



    </section>
  );
}