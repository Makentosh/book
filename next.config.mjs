/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/book' : '',
  output: 'export',
  // distDir: './build',
};

export default nextConfig;
