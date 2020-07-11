/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/pokeapp/" : "",
};
