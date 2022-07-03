const path = require("path");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "src/content-script.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "content.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: [/\.css$/],
        use: ["style-loader", "css-loader"]
      },
    ],
  }
};
