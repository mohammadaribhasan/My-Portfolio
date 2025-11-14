/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co", // external image host
        pathname: "/**", // allow all paths on this host
      },
    ],
  },
};

module.exports = nextConfig;
