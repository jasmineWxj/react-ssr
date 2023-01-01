const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: path.join(__dirname,'../src/server/index.js'),
    output: {
        // path.join拼接路径
        path: path.join(__dirname, '../build'),
        filename: 'bundle.js',
    },
    externals: [nodeExternals()]
}

module.exports = merge(baseConfig, config);
