import NextMdx from "@next/mdx";

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
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
      },
      { protocol: "https", hostname: "scaler.com" },
      { protocol: "https", hostname: "coursera.org" },
      { protocol: "https", hostname: "edx.org" },
      { protocol: "https", hostname: "udacity.com" },
      { protocol: "https", hostname: "pluralsight.com" },
      { protocol: "https", hostname: "linkedin.com" },
      { protocol: "https", hostname: "ibm.com" },
      { protocol: "https", hostname: "edx.com" },
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"], // Include MDX file extensions
});

export default nextConfig;
