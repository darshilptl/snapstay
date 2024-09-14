/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NODE_ENV === 'production'
      ? "https://snapstay.onrender.com" // Backend URL on Render
      : 'http://localhost:2034',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: `/${process.env.CLOUD_NAME}/**`, // This allows any path under res.cloudinary.com
      },
    ],
  },
  transpilePackages: ['tailwind-merge'],
};

export default nextConfig;