/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 08:54:24
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-20 12:50:30
 * @Desc: 
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

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
                use:[
                    {
                        loader: "babel-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
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
                exclude: /src/,
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