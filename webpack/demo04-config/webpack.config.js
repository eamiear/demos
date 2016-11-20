/**
 * Created by eamiear on 2016/11/20.
 */
var webpack = require('webpack');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};