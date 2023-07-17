const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const BUILD_DIR = {
    production: 'docs',  // needed for github-pages
    development: 'build',
}

module.exports = (env, argv) => {
    const environment = argv.mode;

    if (!Object.keys(BUILD_DIR).includes(environment))
        throw `Unsupported environment "${environment}"`

    const buildDir = BUILD_DIR[environment];

    return {
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, buildDir),
            clean: true,
            publicPath: "",
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
                    to: path.join(__dirname, buildDir),
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
                directory: path.join(__dirname, buildDir),
            },
            port: 3000,
            historyApiFallback: true,
        },
        devtool: environment === 'production' ? 'source-map' : 'eval-source-map',
    };
};
