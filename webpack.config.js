const { resolve } = require('path');
const webpack = require('webpack');

export default {
    entry: [
        // Initialize webpack dev server with hot module replacement
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        // Default entry point
        './src/index.js'
    ],

    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',

    // webpack dev server + HMR
    devServer: {
        hot: true,
        contentBase: __dirname,
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                use: [
                    'json-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
};
