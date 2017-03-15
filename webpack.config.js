var webpack = require('webpack');
var path = require('path');
process.traceDeprecation = true;
const config = {
    stats: {
        colors: true,
        timings: true,
        reasons: false,
        hash: false,
        version: false,
        chunks: false,
        chunkModules: false,
        cached: false,
        cachedAssets: false
    },
    entry: {
        vendor: [
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server'
        ],
        app: path.resolve(__dirname, 'src/index.js')
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            'env',
                            'es2015',
                            'stage-0',
                            'react',
                        ],
                        plugins: [
                            'transform-runtime',
                        ]
                    }
                }],
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'raw-loader' },
                    {
                        loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                    }
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf)$/,
                use: [{loader: 'url-loader'}]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.LoaderOptionsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        host: '0.0.0.0',
        port: 3000,
        historyApiFallback: true,
        hot: true,
    },

};

module.exports = config;
