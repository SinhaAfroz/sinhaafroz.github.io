const isProd = process.env.NODE_ENV === "production";

export default {
  output: "export",
  distDir: "out",
  basePath: isProd ? "/sinhaafroz.github.io" : "", // Only use basePath in production
  assetPrefix: isProd ? "/sinhaafroz.github.io/" : "",
  images: { unoptimized: true },
};
