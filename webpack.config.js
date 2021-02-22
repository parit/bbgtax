// webpack.config.js
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    experiments: {
        asset: true
    },
    context: __dirname,
    entry: ['./src/js/script.js', './src/style/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: function(args) {
            if (/\.(png|jpe?g|gif)$/i.test(args.filename))
                return 'images/[hash][ext][query]'
            else
                return '[hash][ext][query]';
        }
    },
    module: {
        rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '',
                        }
                    },
                    { loader: 'css-loader' },
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
        new HtmlWebPackPlugin({
            template: "src/index.html",
            minify: false
        }),
        new MiniCssExtractPlugin()
    ]
};