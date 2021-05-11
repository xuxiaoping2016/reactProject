/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-11 00:37:19
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-11 14:39:31
 * @Desc: 
 */

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

console.log('process.env.NODE_ENV',process.env.NODE_ENV)
const config = {
    mode: "production",
    devtool: 'cheap-module-source-map',
    entry: path.join(__dirname,'../src/index.js'),
    output:{
        // filename: 'bundle.js',
        filename: 'js/[name].[contenthash].js',
        path: path.join(__dirname,'../dist'),
        // publicPath:'/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options:{
                            // cacheDirectory: true
                        }
                    },
                    // {
                    //     loader: "ts-loader"
                    // }
                ],
                include: path.join(__dirname, '../src'),
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                exclude: /node_modules|antd\.css/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          publicPath: '../'
                        },
                    },{
                        loader:'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            }
                        }
                    },{
                        loader:'less-loader',
                        options: {
                            lessOptions:{
                                javascriptEnabled: true,
                            }
                            
                            // modifyVars: themeVars,
                        }
                    },{
                        loader:'postcss-loader'
                    }
                ],
            },
            // {
            //     test: /\.(png|svg|jpe?g|gif)$/i,
            //     type: 'asset',
            //     parser: {
            //         dataUrlCondition: {
            //         maxSize: 4 * 1024 // 4kb
            //         }
            //     }
            // },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit: 1024,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "src": path.join(__dirname, '../src'),
            "@": path.join(__dirname, '../src'),
            pages: path.join(__dirname, '../src/pages'),
            component: path.join(__dirname, '../src/component'),
            router: path.join(__dirname, '../src/router'),
            // store: path.join(__dirname, 'src/store'),
            // actions: path.join(__dirname, 'src/store/actions'),
            // reducers: path.join(__dirname, 'src/store/reducers'),
            // imgs: path.join(__dirname, 'src/images')
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html'),
            title:"react 模板",
            // filename:"hello"
            
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
             }
         }),
         new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
         }),
        new webpack.HotModuleReplacementPlugin()
   ],
   optimization: {
    // moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        },
    },
    // webpack5 mode == production 已经默认开启代码压缩  无需配置
    minimizer: [new UglifyJsPlugin()]
  },
   target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist'
 }
//  console.log(config)


 module.exports = env => {
     console.log('.......///......',env)
     return config
 }