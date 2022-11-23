const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/cytoscape-extensions-boilerplate.ts",
  output: {
    filename: "cytoscape-extensions-boilerplate.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
};
