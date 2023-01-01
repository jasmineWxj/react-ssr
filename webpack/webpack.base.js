
// @babel/preset-env:转换高级的js语法，
// @babel/preset-react：转换jsx语法
module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    useBuiltIns: "usage"
                                }
                            ],
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
};

