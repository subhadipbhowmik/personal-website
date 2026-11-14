import fs from "fs";
import path from "path";

const additionalPaths = async () => {
  let blogPostPaths = [];
  try {
    const contentDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(contentDir);
    blogPostPaths = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const slug = file.replace(/\.mdx$/, "");
        const filePath = path.join(contentDir, file);
        const stats = fs.statSync(filePath);
        return {
          loc: `/blog/${slug}`,
          lastmod: stats.mtime.toISOString(),
        };
      });
  } catch (e) {
    console.error("Error reading blog posts for sitemap:", e);
  }

  return [
    {
      loc: "/blog",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/tutorials",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/memories",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/profiles",
      lastmod: new Date().toISOString(),
    },
    {
      loc: "/certifications",
      lastmod: new Date().toISOString(),
    },
    ...blogPostPaths,
  ];
};

const sitemapConfig = {
  siteUrl: "https://shubhadipbhowmik.vercel.app",
  generateRobotsTxt: true,
  additionalPaths,
};

export default sitemapConfig;
