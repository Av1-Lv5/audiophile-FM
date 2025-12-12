/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		API_URL: process.env.API_URL,
		MY_SECRET_KEY: process.env.MY_SECRET_KEY,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
