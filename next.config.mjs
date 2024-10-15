/** @type {import('next').NextConfig} */
const nextConfig = {
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
      'res.cloudinary.com'
    ]
  },
};

export default nextConfig;
