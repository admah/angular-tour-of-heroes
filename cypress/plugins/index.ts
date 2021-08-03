import * as webpackConfig from "./webpack.config";
const { startDevServer } = require("@cypress/webpack-dev-server");
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");
const registerCodeCoverageTasks = require("@cypress/code-coverage/task");

module.exports = (on, config) => {
  on("dev-server:start", (options) =>
    startDevServer({
      options,
      webpackConfig,
    })
  );

  on("file:preprocessor", cypressTypeScriptPreprocessor);

  // enable code coverage collection
  return registerCodeCoverageTasks(on, config);
};
