import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    tsconfigPath: "./tsconfig.json",
  },
  experimental: {
    typedRoutes: true,
  },
  webpack: (config, { isServer }) => {
    // typescript-goを使用するための設定
    config.resolve.alias = {
      ...config.resolve.alias,
      typescript: "typescript-go",
    }
    return config
  },
}

export default nextConfig
