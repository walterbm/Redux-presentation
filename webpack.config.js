module.exports = {
    entry: "./examples/redux-todo/main.js",
    output: {
        path: __dirname,
        filename: "index.js"
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
              test: /\.css$/,
              loader: ['style','css']
            }
        ]
    }
};
