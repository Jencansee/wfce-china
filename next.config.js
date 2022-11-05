/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		formats: ['image/avif', 'image/webp'],
	},
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
