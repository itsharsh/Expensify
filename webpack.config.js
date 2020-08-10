const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require("path");

module.exports = (env) => {
  const CSSExtract = ExtractTextPlugin("styles.css");
  return {
    entry: "./src/App.js",
    output: {
      path: path.join(__dirname, "public", "dist"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              { loader: "css-loader", options: { sourceMap: true } },
              { loader: "sass-loader", options: { sourceMap: true } },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: env === "production" ? "source-map" : "inline-source-map",
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, "public"),
      publicPath: "/dist/",
    },
  };
};
