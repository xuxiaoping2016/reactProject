/*
 * @Author: xiaoping.xu
 * @Date: 2021-03-19 11:05:02
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 17:52:47
 * @Desc: 
 */
const path = require("path")
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader?cacheDirectory=true'
                }
            }
        ]
    },
    devServer: {
        port: 8070,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            src:path.join(__dirname, 'src'),
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            // store: path.join(__dirname, 'src/store'),
            // actions: path.join(__dirname, 'src/store/actions'),
            // reducers: path.join(__dirname, 'src/store/reducers'),
            // imgs: path.join(__dirname, 'src/images')
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'./src/index.html'),
            title:"react 模板",
            // filename:"hello"
            
        })
   ]   
}