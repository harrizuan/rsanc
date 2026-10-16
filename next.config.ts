import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enables Next.js agent feedback in Cursor
    agentFeedback: true,
  },
};

export default nextConfig;
