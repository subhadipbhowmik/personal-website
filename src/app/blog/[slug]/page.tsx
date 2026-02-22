import { Button } from "@/components/ui/button";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faXTwitter,
  faWhatsapp,
  faReddit,
  faTelegram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";


// ✅ FIXED generateMetadata for Next 16
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {

  const { slug } = await params; // ✅ unwrap params

  const post = await getPost(slug);

  if (!post) return;

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    imageUrl,
    tags = [],
  } = post.metadata;

  const ogImage = imageUrl
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
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    keywords: Array.isArray(tags) ? tags.join(", ") : "shubhadip",
    robots: "index, follow",
  };
}


// ✅ FIXED default export for Next 16
export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params; // ✅ unwrap params

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const currentUrl = `${DATA.url}/blog/${post.slug}`;

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
            url: currentUrl,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Shubhadip Bhowmik",
              logo: {
                "@type": "ImageObject",
                url: "https://shubhadipbhowmik.vercel.app/me.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": currentUrl,
            },
          }),
        }}
      />

      <Link href="/blog">
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
      />

      {/* Tags */}
      {post.metadata.tags?.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {post.metadata.tags.map((tag: string, index: number) => (
            <span
              key={tag}
              className={`px-2 py-1 text-sm rounded ${
                index % 2 === 0
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#6366F1] text-white"
              }`}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Social Share */}
      <div className="mt-6 flex items-center space-x-4">

        <a
          href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-black"
        >
          <FontAwesomeIcon icon={faXTwitter} className="text-white" />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-blue-700"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white" />
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.metadata.title)}%20${currentUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-green-500"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
        </a>

        <a
          href={`https://www.reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-orange-500"
        >
          <FontAwesomeIcon icon={faReddit} className="text-white" />
        </a>

        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-blue-600"
        >
          <FontAwesomeIcon icon={faTelegram} className="text-white" />
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${post.metadata.imageUrl}&description=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-red-600"
        >
          <FontAwesomeIcon icon={faPinterest} className="text-white" />
        </a>

      </div>

    </section>
  );
}