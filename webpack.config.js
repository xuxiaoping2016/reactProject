const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app:[path.join(__dirname,'src/index.js')],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

    output: {
        path: path.join(__dirname, 'dist'),
        // filename:"bundle.js"
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js'
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader: "babel-loader",
                    options:{
                        cacheDirectory: true
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                //   'style-loader',
                  {
                      loader: 'css-loader',
                      options: { 
                          modules: {
                            localIdentName: '[path][name]_[local]_[hash:base64:5]'
                          },
                          importLoaders: 1 
                        }
                    },
                    'less-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name:"[path][name].[ext]",
                        // outputPath:'img/',
                        // publicPath: 'output/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: "css/[name].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/api', to: 'api' }
            ]
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            store: path.join(__dirname, 'src/store'),
            actions: path.join(__dirname, 'src/store/actions'),
            reducers: path.join(__dirname, 'src/store/reducers'),
            imgs: path.join(__dirname, 'src/images')
        }
    },
    devtool: 'cheap-module-source-map'
}