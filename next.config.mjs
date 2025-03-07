const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  distDir: "out",
  basePath: isProd ? "/my_portfolio" : "", // Only use basePath in production
  assetPrefix: isProd ? "/my_portfolio/" : "",
  images: { unoptimized: true },
};
