/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // Local images under /public are optimised by Next.js itself.
    // Older project photos still live on ImageKit and are referenced by absolute URL.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/0icmp9gly/**",
      },
    ],
  },
};

export default nextConfig;
