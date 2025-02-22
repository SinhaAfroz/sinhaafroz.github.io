/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ Enables static export
    distDir: "out", // ✅ Output folder for GitHub Pages
    images: {
      unoptimized: true, // ✅ Fixes image issues on GitHub Pages
    },
    basePath: "/your-repo-name", // 🔥 Change this to your GitHub repo name
    assetPrefix: "/your-repo-name", // 🔥 Same as basePath
  };
  
  module.exports = nextConfig;
  