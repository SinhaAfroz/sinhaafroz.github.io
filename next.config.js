/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my_portfolio',
  assetPrefix: '/my_portfolio/',
  images: {
    unoptimized: true,  // Fixes Next.js image issues for static export
  },
};

module.exports = nextConfig;
