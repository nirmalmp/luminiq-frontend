/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/luminiq-frontend',
  assetPrefix: '/luminiq-frontend/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig
