import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  devIndicators: false,
  compiler: {
    styledComponents: true,
  },
  // error fix to allow the dev server to accept requests from required address
  // (https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins):
  allowedDevOrigins: ["127.0.0.1"],
};

export default nextConfig;
