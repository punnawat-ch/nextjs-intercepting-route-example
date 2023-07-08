/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["tailwindui.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  mdxRs: true,
  reactStrictMode: true,
};

const withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(nextConfig);
