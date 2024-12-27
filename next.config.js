/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable reading markdown files
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    });
    return config;
  },
  // Ensure API routes are properly handled
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
}