/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true
	},
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	optimizeFonts: false,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
