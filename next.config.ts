import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**', // Optional: use '**' to match all paths
      },
    ],
  },
};

export default nextConfig;

