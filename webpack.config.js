var path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, "build"),
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/, /\.js$/],
                exclude: [/node_modules/, /test/, /utils/],
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react']
                }
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', ' '],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.ejs'
      })
    ]
};
