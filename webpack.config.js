const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.ts'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.ts/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        }]
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};