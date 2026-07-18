import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/api/photo",
      },
    ],
  },
};

export default nextConfig;
