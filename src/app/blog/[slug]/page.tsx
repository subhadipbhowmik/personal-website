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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faXTwitter, faWhatsapp, faReddit, faTelegram, faPinterest } from '@fortawesome/free-brands-svg-icons';


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
    tags,
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
    keywords: tags.join(", "), // Use blog tags as keywords
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
                url: "https://your-site-url/logo.png", // Include the logo for the publisher
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${DATA.url}/blog/${post.slug}`,
            },
          }),
        }}
      />

      <Link href={"/blog"}>
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

      {/* show all tags  */}
      {/* show all tags  */}
      {/* show all tags  */}
      <div className="mt-auto flex flex-col">
        {post.metadata.tags && post.metadata.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {post.metadata.tags.map((tag: string, index: number) => (
              <span
                key={tag}
                className={`px-2 py-1 text-sm rounded ${index % 2 === 0
                  ? "bg-[#22C55E] text-white"
                  : "bg-[#6366F1] text-white"
                  }`}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Social media sharing buttons */}
      <div className="mt-4 flex items-center space-x-4">
        <a
          href={`https://twitter.com/intent/tweet?url=${DATA.url}/blog/${post.slug}&text=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded border-black hover:bg-black bg-black transition duration-200"
          aria-label="Share on Twitter"
        >
          <FontAwesomeIcon icon={faXTwitter} size="lg" className="text-white" />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 text-white rounded bg-blue-700 hover:bg-blue-800 transition duration-200"
          aria-label="Share on LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-white" />
        </a>

        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.metadata.title)}%20${DATA.url}/blog/${post.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-green-500 text-white transition duration-200"
          aria-label="Share on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        <a
          href={`https://www.reddit.com/submit?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}&title=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-orange-500 text-white transition duration-200"
          aria-label="Share on Reddit"
        >
          <FontAwesomeIcon icon={faReddit} size="lg" className="text-white" />
        </a>

        <a
          href={`https://t.me/share/url?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}&text=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center p-2 justify-center w-10 h-10 rounded bg-blue-600 text-white transition duration-200"
          aria-label="Share on Telegram"
        >
          <FontAwesomeIcon icon={faTelegram} size="lg" className="text-white" />
        </a>

        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`${DATA.url}/blog/${post.slug}`)}&media=${post.metadata.imageUrl}&description=${encodeURIComponent(post.metadata.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex p-2 items-center justify-center w-10 h-10 rounded bg-red-600 text-white transition duration-200"
          aria-label="Share on Pinterest"
        >
          <FontAwesomeIcon icon={faPinterest} size="lg" className="text-white" />
        </a>
      </div>

    </section>
  );
}
