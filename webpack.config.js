const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: "source-map",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js",
  },
};
