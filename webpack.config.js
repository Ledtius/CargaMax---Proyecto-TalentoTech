const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: {
    main: "./js/menu.js",
    index: "./js/contact-form.js",
    calculator: "./js/calculator.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js", // JS en "dist/js"
    publicPath: "/", // Ajustar si el proyecto no se sirve desde la raíz
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "image/[name].[hash][ext]", // Imágenes en "dist/image"
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html", // Mantiene index.html en la raíz
      chunks: ["main", "index"],
    }),
    new HtmlWebpackPlugin({
      template: "./html/about-us.html",
      filename: "html/about-us.html", // Mueve a "dist/html"
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./html/calculator.html",
      filename: "html/calculator.html", // Mueve a "dist/html"
      chunks: ["main", "calculator"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css", // CSS en "dist/css"
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "image"),
          to: path.resolve(__dirname, "dist/image"), // Copiar imágenes a "dist/image"
        },
        {
          from: path.resolve(__dirname, "css"),
          to: path.resolve(__dirname, "dist/css"), // Copiar CSS a "dist/css"
        },
      ],
    }),
  ],
  optimization: {
    minimize: true, // Minimización activada
    minimizer: [
      "...", // Minimizar JavaScript
      new CssMinimizerPlugin(), // Minimizar CSS
    ],
  },
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
  mode: "production", // Cambiar a "development" si es necesario
};
