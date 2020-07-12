/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/pokeapp/" : "",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.jsx?$/,
      },
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
