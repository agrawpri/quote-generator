const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const BASE_URL = {
    production: new URL('https://agrawpri.github.io/quote-generator/'),
    development: new URL('http://localhost:3000/'),
}

const BUILD_PATH = {
    production: 'docs',  // needed for github-pages
    development: 'build',
}

module.exports = (env, argv) => {
    const environment = argv.mode;

    if (!Object.keys(BASE_URL).includes(environment))
        throw `Unsupported environment "${environment}"`

    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, BUILD_PATH[environment]),
            clean: true,
            publicPath: "",
        },
        plugins: [
            new webpack.DefinePlugin({
                __BASE_PATH__: JSON.stringify(BASE_URL[environment].pathname),
            }),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, "views", "index.html"),
                favicon: path.join(__dirname, "views", "favicon.ico"),
                base: BASE_URL[argv.mode].toString(),
            }),
            new MiniCssExtractPlugin(),
            new CopyPlugin({
                patterns: [{
                    from: path.join(__dirname, 'public'),
                    to: path.join(__dirname, BUILD_PATH[environment]),
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
                directory: path.join(__dirname, BUILD_PATH[environment]),
            },
            port: 3000,
            historyApiFallback: true,
        },
    };
};
