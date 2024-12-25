/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'i.scdn.co'
          },
          {
              protocol: 'https',
              hostname: 'iconduck.com'
          }
      ]
  }
};

export default nextConfig;