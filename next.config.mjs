/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/book' : '',
  output: 'export',
  // distDir: './build',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
