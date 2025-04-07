import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images :{
    domains :['cdn.sanity.io']
  }
};

export default nextConfig;
// next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
