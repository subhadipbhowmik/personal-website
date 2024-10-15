import { getServerSideSitemap } from 'next-sitemap';
import { getBlogPosts } from './src/data/blog'; // Make sure the path is correct

const additionalPaths = async () => {
  const blogPosts = await getBlogPosts();
  
  // Map over blog posts to add individual blog URLs with their respective `lastmod`
  const blogPostPaths = blogPosts.map(post => ({
    loc: `/blog/${post.slug}`, // Assuming slug is the filename without .mdx
    lastmod: post.metadata.publishedAt || new Date().toISOString(), // Use the actual published date
  }));

  return [
    {
      loc: '/blog',
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/tutorials',
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/memories',
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/profiles',
      lastmod: new Date().toISOString(),
    },
    {
      loc: '/certifications',
      lastmod: new Date().toISOString(),
    },
    ...blogPostPaths, // Include all blog post URLs
  ];
};

export default {
  siteUrl: 'https://shubhadipbhowmik.vercel.app', // Use your website URL here
  generateRobotsTxt: true, // Generates robots.txt as well
  additionalPaths, // Include dynamic paths
};
