/*
 * @Author: xiaoping.xu
 * @Date: 2021-03-19 11:05:02
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-03 17:33:43
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
        filename: 'bundle.js'
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
        alias: {
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
            title:"热更新",
            filename: 'hot.html',
            template: path.join(__dirname, 'src/index.html')
        })
    ]  
}