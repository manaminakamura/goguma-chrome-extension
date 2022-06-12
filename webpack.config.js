const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/content-script.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "content.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  }
};
