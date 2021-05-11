/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:31:16
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 23:58:10
 * @Desc: 
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path')

console.log('process.env.NODE_ENV',process.env.NODE_ENV)
const config = {
    mode: "development",
    devtool: 'source-map',
    entry: path.join(__dirname,'../src/index.js'),
    output:{
        // filename: 'bundle.js',
        filename: '[name].[contenthash].js',
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
                use: ['style-loader', {
                        loader:'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: "[path][name]__[local]--[hash:base64:5]"
                            },
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
                        limit: 1024
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
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, '../dist'),
        historyApiFallback: true,
        hot: true
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html'),
            title:"react 模板",
            // filename:"hello"
            
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
    }
  },
   target: process.env.NODE_ENV === 'development' ? 'web' : 'browserslist'
 }
//  console.log(config)


 module.exports = env => {
     console.log('.......///......',env)
     return config
 }