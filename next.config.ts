import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // IMPORTANT
  images: {
    unoptimized: true, // required for GitHub Pages
  },
  basePath: "/GoAffpro-documentation",
  assetPrefix: "/GoAffpro-documentation",
};

export default nextConfig;