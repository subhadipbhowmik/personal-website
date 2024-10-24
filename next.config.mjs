import NextMdx from '@next/mdx';

const withMDX = NextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
  },
});

const nextConfig = withMDX({
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: [
      'github-readme-activity-graph.vercel.app',
      'scaler.com',
      'coursera.org',
      'edx.org',
      'udacity.com',
      'pluralsight.com',
      'linkedin.com',
      'ibm.com',
      'edx.com',
      'media.dev.to',
      'res.cloudinary.com',
    ],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'], // Include MDX file extensions
});

export default nextConfig;
