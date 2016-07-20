const path = require('path');

module.exports = {
    entry: './examples/mortar_playground/main.js',
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel',
              query: {
                presets: ['es2015', 'react', 'stage-2']
              }
            },
            {
              test: /\.scss$/,
              loaders: ['style', 'css', 'sass']
            },
            {
              test   : /\.css$/,
              loaders: ['style', 'css']
            },
            {
              test   : /\.(png|jpg|gif|svg)$/,
              exclude: /node_modules/,
              loader : 'file',
              query  : {
                name: 'assets/img/img-[hash:6].[ext]'
              }
            },
            {
              test   : /\.ico$/,
              exclude: /node_modules/,
              loader : 'file',
              query  : {
                name: '[name].[ext]'
              }
            },
            {
              test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url',
              query : {
                limit   : 10000,
                minetype: 'application/font-woff',
                name    : 'assets/fonts/[name].[ext]'
              }
            },
            {
              test  : /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url',
              query : {
                limit: 8192,
                name : 'assets/fonts/[name].[ext]'
              }
            }
        ]
    }
};
