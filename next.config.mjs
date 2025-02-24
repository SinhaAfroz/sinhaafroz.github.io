export default {
    output: "export", // Enables static export in Next.js 15
    distDir: "out", // The output directory
    basePath: "/my_portfolio", // Required for GitHub Pages
    assetPrefix: "/my_portfolio/", // Ensures correct asset loading
    images: { unoptimized: true }, // Disable Next.js Image Optimization (since it doesn't work with static export)
  };
  