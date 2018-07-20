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
        },
        marked: {
            commonjs: 'marked',
            commonjs2: 'marked',
            amd: 'marked'
        },
        "lz-string": {
            commonjs: 'lz-string',
            commonjs2: 'lz-string',
            amd: 'lz-string'
        },
        jquery: {
            commonjs: 'jquery',
            commonjs2: 'jquery',
            amd: 'jquery',
            root: '$'
        }
    }
};
