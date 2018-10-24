const path = require("path");

module.exports = {
  entry: {
    inject: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "addon/src/"),
    filename: "[name]/inject.js"
  }
};
