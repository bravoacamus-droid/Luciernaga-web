import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@splinetool/runtime', '@splinetool/react-spline'],
  experimental: {
    turbo: {
      // Configuraciones para turbopack si fueran necesarias
    }
  }
};

export default nextConfig;
