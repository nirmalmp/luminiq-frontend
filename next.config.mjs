/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/luminiq-frontend' : '',
  assetPrefix: isProd ? '/luminiq-frontend' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig
