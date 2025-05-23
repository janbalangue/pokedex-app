import type { NextConfig } from "next";

const repo = "pokedex-app"; // Only the repo name

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;
