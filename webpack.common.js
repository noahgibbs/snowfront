const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        snowfront: './src/index.js'
    },
    plugins: [
              new CleanWebpackPlugin(['dist']),
              new HtmlWebpackPlugin({
                      title: 'Production'
                  })
              ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'var'
    },
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};
