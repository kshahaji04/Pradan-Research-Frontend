/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      });
    } else {
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        // Adjust the path to polyfills.js based on your project structure
        const polyfillPath = path.resolve("./polyfills.js");

        if (
          entries["main-app"] &&
          !entries["main-app"].includes(polyfillPath)
        ) {
          entries["main-app"].unshift(polyfillPath);
        }
        return entries;
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "archive.cdn-thecorrespondent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "99percentinvisible.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "contentberg3.theme-sphere.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "www.atree.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
