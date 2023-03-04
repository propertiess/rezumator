/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    SECRET_KEY: process.env.SECRET_KEY
  }
};

module.exports = nextConfig;
