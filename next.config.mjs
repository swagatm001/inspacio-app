/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/utils/imageKitLoader.ts",
  },
};

export default nextConfig;
