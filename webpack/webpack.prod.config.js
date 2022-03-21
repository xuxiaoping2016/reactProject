/*
 * @Author: xiaoping.xu
 * @Date: 2022-03-19 08:54:24
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2022-03-21 16:53:56
 * @Desc: 
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin')
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
                include: path.join(__dirname, '../src'),
                exclude: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
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
                exclude: path.join(__dirname, '../src'),
                include: /(node_modules|bower_components)/,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
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
                use: {
                    loader: 'url-loader',
                    options: {
                      limit: 1024*3,
                      outputPath: 'images/',
                      name: '[name].[ext]',
                    },
                  }
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
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].chunk.css'
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
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                parallel: true, // 是否并行打包
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            /**
             * initial 入口 chunk，对于异步导入的文件不处理
                async 异步 chunk，只对异步导入的文件处理
                all 全部 chunk
                */

            // 缓存分组
            cacheGroups: {
                // 第三方模块
                vendor: {
                    name: 'vendor', // chunk 名称
                    priority: 1, // 权限更高，优先抽离，重要！！！
                    test: /node_modules/,
                    minSize: 0,  // 大小限制
                    minChunks: 1  // 最少复用过几次
                },

                // 公共的模块
                common: {
                    name: 'common', // chunk 名称
                    priority: 0, // 优先级
                    minSize: 0,  // 公共模块的大小限制
                    minChunks: 2  // 公共模块最少复用过几次
                }
            }
        }
        
    },
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