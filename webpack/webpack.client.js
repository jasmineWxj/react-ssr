const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: path.join(__dirname, '../src/client/index.js'), 
    output: {
        path: path.join(__dirname, "../public"),
        filename: "bundle.js",
    }
};

module.exports = merge(baseConfig, config);

