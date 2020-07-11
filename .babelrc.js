const overrides = require("./env-config");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", { ...overrides }]],
};
