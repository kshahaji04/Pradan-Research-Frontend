/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
          hostname:"contentberg3.theme-sphere.com",
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