const path = require('path');
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: ['react-hot-loader/patch', path.join(__dirname,'src/index.js')],

    output: {
        path: path.join(__dirname, 'dist'),
        filename:"bundle.js"
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
                  'style-loader',
                  {
                      loader: 'css-loader',
                      options: { modules: true, importLoaders: 2 }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        // name:[path][name].[ext],
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
            chunkFilename: "css/[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/api', to: 'api' }
            ]
        })
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            store: path.join(__dirname, 'src/store'),
            actions: path.join(__dirname, 'src/store/actions'),
            reducers: path.join(__dirname, 'src/store/reducers')
        }
    }
}