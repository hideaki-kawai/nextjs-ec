/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // hot reload
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1200, //チェック時間
      aggregateTimeout: 500, // 遅延時間
      ignored: ['node_modules'],
    };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
};

module.exports = nextConfig;
