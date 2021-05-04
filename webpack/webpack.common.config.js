/*
 * @Author: xiaoping.xu
 * @Date: 2021-04-30 15:31:16
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-05 02:18:42
 * @Desc: 
 */
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')


const config = {
    mode: "development",
    devtool: 'source-map',
    entry: path.join(__dirname,'../src/index.js'),
    output:{
        filename: 'bundle.js',
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
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "src": path.join(__dirname, '../src'),
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
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../src/index.html'),
            title:"react 模板",
            // filename:"hello"
            
        }),
        new webpack.HotModuleReplacementPlugin()
   ]
 }
//  console.log(config)

 module.exports = config