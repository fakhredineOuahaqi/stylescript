/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    externalDir: true
  },
  transpilePackages: ['components'],
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp']
  },
  productionBrowserSourceMaps: false,
  compress: true,
  env: {
    NEXT_PUBLIC_SITE_TITLE: process.env.NEXT_PUBLIC_SITE_TITLE || 'Shop Demo'
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

export default nextConfig
