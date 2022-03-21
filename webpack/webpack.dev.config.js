/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 08:54:24
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-21 16:29:25
 * @Desc: 
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const Happypack = require('happypack')

module.exports = {
    mode: "development",
    devtool: 'inline-source-map',
    entry: path.join(__dirname,'../src/index.js'),
    output: {
        // filename:'bundle.js',
        filename: '[name].[contenthash].js',
        path: path.join(__dirname,'../dist')
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, '../src'),
                exclude: /(node_modules|bower_components)/,
                use:[ 'happypack/loader?id=babel'
                    // {
                    //     loader: "babel-loader",
                    //     options:{
                    //         cacheDirectory: true
                    //     }
                    // }
                ]
            },
            {
                test: /\.less$/,
                // exclude: /node_modules/,
                include: path.join(__dirname, '../src'),
                exclude: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                // mode: 'local',
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            },
                        }

                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions:{
                                javascriptEnabled: true,
                            }
                            
                            // modifyVars: themeVars,
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                // exclude: /src/,
                exclude: path.join(__dirname, '../src'),
                include: /(node_modules|bower_components)/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders:1
                        }

                    },
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions:{
                                javascriptEnabled: true,
                            }
                            
                            // modifyVars: themeVars,
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            },
                        }

                    }
                ],
                exclude: /node_modules/
            },{
                test: /\.(jpg|jpeg|gif|png)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          limit: 1024*5,
                          outputPath: 'images/',
                          name: '[name].[ext]',
                        },
                      }
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            title:"react 模板",
            // filename:"hello"
            
        }),
        // 忽略 moment 下的 /locale 目录
        // new webpack.IgnorePlugin(/\.\/locale/, /moment/)
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),


        new Happypack({
            id: 'babel',
            // loaders:[{
            //     loader: "babel-loader",
            //     options:{
            //         cacheDirectory: true
            //     }
            // }]
            loaders: ['babel-loader?cacheDirectory']
        })
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, '../public/index.html'),
        //     // filename: "index",
        //     title:"react全家桶"
        // })
    ],
    devServer:{
        static: path.join(__dirname, '../dist'),
        host: "localhost",
        port: 9999,
        historyApiFallback: true,
        hot: true
    },
    resolve:{
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "@": path.join(__dirname, '../src'),
            pages: path.join(__dirname, '../src/pages'),
            component: path.join(__dirname, '../src/component'),
            router: path.join(__dirname, '../src/router'),
            assets: path.join(__dirname, '../src/assets')
        }
    }
}