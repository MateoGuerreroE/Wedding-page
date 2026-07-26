import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 95],
  },
  allowedDevOrigins: ["192.168.1.7"],
};

export default nextConfig;
