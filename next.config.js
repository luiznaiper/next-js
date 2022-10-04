/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'customValue',
  },
  // basePath: '/dist'
  compress: true,
  async redirects() {
    return [
      {
        source: '/hello',
        destination: 'https://luisolivarez.dev',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
