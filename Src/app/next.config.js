/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  images: {
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
