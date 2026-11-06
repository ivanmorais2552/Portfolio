import type { NextConfig } from 'next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

const nextConfig = (phase: string): NextConfig => ({
  reactStrictMode: true,
  // Keep Fast Refresh artifacts separate from production builds. Multiple
  // commands can now run without overwriting each other's generated chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
});

export default nextConfig;
