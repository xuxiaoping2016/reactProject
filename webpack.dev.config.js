const path = require('path');
const webpack = require("webpack");

module.exports = {
    mode: 'development',
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
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //   title: 'Hot Module Replacement'
        // }),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias: {
            pages: path.join(__dirname, 'src/pages'),
            component: path.join(__dirname, 'src/component'),
            router: path.join(__dirname, 'src/router'),
            store: path.join(__dirname, 'src/store')
        }
    },
    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true
    } 
}