const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        clean: true,
        publicPath: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "views", "index.html"),
            favicon: path.join(__dirname, "views", "favicon.ico"),
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [{
                from: path.join(__dirname, 'public'),
                to: path.join(__dirname, 'docs'),
            }]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpg|gif|ico|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "docs"),
        },
        port: 3000,
        historyApiFallback: true,
    },
};
