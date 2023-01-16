const path = require('path');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  webpack(config, { webpack }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"]
    });

    config.resolve = {
      alias: {
        '@styles': path.resolve(__dirname, 'styles'),
        '@components': path.resolve(__dirname, 'components'),
        '@utils': path.resolve(__dirname, 'utils'),
        '@apis': path.resolve(__dirname, 'apis'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@customTypes': path.resolve(__dirname, 'customTypes'),
        '@public': path.resolve(__dirname, 'public'),
        '@static': path.resolve(__dirname, 'static'),
      },
      ...config.resolve,

    };
    return config;
  },
  i18n, // 다국어 지원
}

module.exports = nextConfig
