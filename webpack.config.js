const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
   // entry: './src/index.js',
   // output: {
   //    path: __dirname + '/public/',
   //    filename: 'bundle.js'
   // },
   devServer: {
      //hot: true,
      inline: true,
      port: 4000,
      contentBase: __dirname + '/public/'
   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
