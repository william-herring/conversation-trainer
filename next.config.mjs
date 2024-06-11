/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/conversation-trainer",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
