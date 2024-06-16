import { hostname } from "os";

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
				port: "",
				pathname: "/photos/**"
			}
		]
	}
};

export default nextConfig;
