import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: false,
  env: {
    URL: process.env.URL,
    API_INTERNAL_URL: process.env.API_INTERNAL_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.example.com',
        pathname: '/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_INTERNAL_URL}/api/:path*`,
      },
      {
        source: '/uploads/:path*',
        destination: `${process.env.API_INTERNAL_URL}/uploads/:path*`,
      },
    ]
  },
}

export default nextConfig
