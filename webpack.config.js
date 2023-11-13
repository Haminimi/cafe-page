const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Café',
            template: './src/index.html',
            favicon: './src/favicon.ico',
        }),
    ],
    mode: 'production',
    devtool: 'source-map',
    devServer: {
        static: './dist',
      },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};