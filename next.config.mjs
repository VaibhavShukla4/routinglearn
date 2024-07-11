/**
 * @format
 * @type {import('next').NextConfig}
 */

import withBundleAnalyzer from '@next/bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';

const nextConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})({
  images: {
    domains: ['fakestoreapi.com'],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/users/home',
      },
      {
        source: '/aboutus',
        destination: '/users/aboutus',
      },
      {
        source: '/contact',
        destination: '/users/contact',
      },
      {
        source: '/addproduct',
        destination: '/users/addproduct',
      },
      {
        source: '/profile/:id',
        destination: '/users/profile/:id',
      },
      {
        source: '/product/:id',
        destination: '/users/product/:id',
      },
    ];
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz',
          algorithm: 'gzip',
          test: /\.(js|css|html|svg)$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      );

      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|svg)$/,
          compressionOptions: { level: 11 },
          threshold: 10240,
          minRatio: 0.8,
        }),
      );
    }
    return config;
  },
  experimental: {
    optimizeFonts: true,
  },
  http2: {
    push: true,
    preload: true,
  },
});

export default nextConfig;
