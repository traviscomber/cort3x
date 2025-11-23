/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Enforce ESLint in builds
  },
  typescript: {
    ignoreBuildErrors: false, // Enforce TypeScript checks in builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
