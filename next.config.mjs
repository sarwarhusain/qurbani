/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
