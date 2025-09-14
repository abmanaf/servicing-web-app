import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['a.storyblok.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
};

export default nextConfig;
