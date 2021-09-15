const path = require("path");
const { resolve } = require("path");

module.exports = {
  entry: {
    main: resolve("src/index.ts"),
  },
  output: {
    path: path.resolve("dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        // use: {
        //   loader: 'babel-loader',
        // },
        use: {
          loader: "swc-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
  },
  devtool: "source-map", // 打包出的js文件是否生成map文件（方便浏览器调试）
};
