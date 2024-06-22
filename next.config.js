/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // specify the protocol if needed, e.g., 'https'
        hostname: 'LeoCode.com', // replace 'example.com' with the actual hostname
        port: '', // specify the port if needed, e.g., '3000'
        pathname: '/path/to/images/*' // replace with the actual path if needed
      }
    ]
  },
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig;
