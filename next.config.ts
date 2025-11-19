import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  typedRoutes: true,
  webpack: (config) => {
    // typescript-goを使用するための設定
    config.resolve.alias = {
      ...config.resolve.alias,
      typescript: "@typescript/native-preview",
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      typescript: "@typescript/native-preview",
    },
  },
};

export default nextConfig;
