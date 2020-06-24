const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname,'src/index.js'),

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
            }
        ]
    },
    plugins: [
       
    ],
    // devServer: {
    //     port: 8080,
    //     contentBase: path.join(__dirname, './dist'),
    //     historyApiFallback: true,
    //     host: '0.0.0.0'
    // } 
}