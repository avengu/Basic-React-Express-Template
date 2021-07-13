const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Setting the entry point for webpack 5. Default value is to look for './src/index.js'
  entry: "./src/client/index.jsx",
  // Where the files are sent once they are bundled
  output: {
    path: path.join(__dirname, "/public/js"),
    filename: "bundled.js",
    publicPath: "/",
  },
  // Webpack 5 comes with devServer which loads in development mode.
  devServer: {
    // tell the server where to serve content from
    contentBase: path.join(__dirname, "dist"),
    // Enable gzip compression for everything served
    compress: true,
    // port sets the port to any desired open port. Default is set to 8080.
    port: 3000,
    // triggers a full page reload when changes are made in any file. Disabled by default.
    watchContentBase: true,
    // redirect 404s to index.html
    historyApiFallback: true,
  },
  // Rules of how webpack will effect the files, compile & bundle them for the browser
  module: {
    rules: [
      {
        // Mention the file extensions to be targeted by the loader.
        test: /\.(js|jsx)$/,
        // Mention files that need to be ignored by the bundler
        exclude: /node_modules/,
        // Specify the desired loader for this process
        use: {
          loader: "babel-loader",
        },
      },
      {
        // Mention the file extensions to be targeted by the loader
        test: /\.css$/,
        // Array for loaders to be used. Note the order. css-loader turns the css files into common js. style-loader extracts the css into files as string.
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin(),
  ],
};
