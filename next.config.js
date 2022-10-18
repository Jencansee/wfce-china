/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		quality: 83,
	},
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
