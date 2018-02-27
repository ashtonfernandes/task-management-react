const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const IS_PROD = process.env.NODE_ENV === "production";
const SRC = path.resolve("src");

module.exports = {
  devtool: IS_PROD ? "" : "cheap-module-source-map",
  entry: "./src/index.jsx",
  output: {
    path:path.resolve("public"),
    filename: "bundle.js"
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: !IS_PROD
    }),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      title: "React App",
      template: path.resolve("index.ejs"),
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    // new FaviconsWebpackPlugin({ logo: "./react-icon.png", inject: true })
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
          plugins: ["transform-class-properties"]
        }
      },
      {
        test: /\.css$/,
        loader: IS_PROD
          ? "style-loader!css-loader"
          : ExtractTextPlugin.extract({
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
              })
            })
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.(\?[a-z0-9]+)?$/,
        include: SRC,
        loader: "file-loader?name=fonts/[name].[ext]"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.(jpe?g|gif|svg)$/,
        include: SRC,
        loader: "file-loader",
        options: {
          name: "images/[hash][name].[ext]"
        }
      }
    ]
  }
};
