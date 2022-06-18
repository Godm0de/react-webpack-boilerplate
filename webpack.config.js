const { merge } = require("webpack-merge");
const baseConfig = require("./webpack/webpack.base.js");

module.exports = (env, argv) => {

  const enviroment = argv.mode === "production" ? "prod" : "dev";

  const config = require(`./webpack/webpack.${enviroment}.js`);

  return merge(baseConfig, config);
};
