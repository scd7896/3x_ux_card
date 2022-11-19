/** @type {import('next').NextConfig} */

const basePath = {
	development: "",
	production: "/nextjs-markdown-base",
};

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: basePath[process.env.NODE_ENV]
}

module.exports = nextConfig
