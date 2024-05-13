// next.config.js
const path = require("path");

module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { allowFutureImage: true },
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/style.scss")],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|mp3)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          name: "static/media/[name].[hash].[ext]",
        },
      },
    });

    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm|mp3)$/,
        use: {
          loader: "ignore-loader",
        },
        include: /node_modules/,
      });
    }

    return config;
  },
};
