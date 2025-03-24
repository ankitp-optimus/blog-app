const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.js", // Entry point
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  devServer: {
    port: 3000, // Change port if needed
    historyApiFallback: true, // Allows direct URL access
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Babel loader for JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // CSS loader
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Image loader
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mainApp", // Name of your app
      filename: "remoteEntry.js", // File exposing components
      exposes: {
        "./App": "./src/App", // Expose your main App component
      },
      shared: ["react", "react-dom", "react-router-dom"], // Shared dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"], // Allow JS and JSX imports
  },
};
