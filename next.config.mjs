/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {
      unoptimized: true,
      domains: ["localhost", "votredomaine.com"],
    },
    static: {
      public: './public',
    },
  };

export default nextConfig;
