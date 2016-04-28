"use strict";

let path = require("path"),
    webpack = require("webpack"),

    webpackConfig,
    pathBase = {
        js: path.join(__dirname),
        main: path.join(__dirname, "examples", "react", "js", "main.js")
    },
    bootstrapLoaders = require("./bootstrap.loaders");

webpackConfig = {
    entry: [
        "webpack-dev-server/client?http://localhost:9000",
        "webpack/hot/only-dev-server",
        "babel-polyfill",
        pathBase.main
    ],

    output: {
        path: "assets",
        filename: "bundle.js",
        publicPath: "/assets"
    },

    devServer: {
        contentBase: path.join(__dirname, "examples", "react"),
        port: 9000
    },

    plugins: [
        new webpack.ProvidePlugin({React: "react"}),
        new webpack.HotModuleReplacementPlugin()
    ],

    module: {
        loaders: [ //loaders process from right to left
            {
                test: /\.js$/,
                include: [
                    pathBase.js
                ],
                exclude: /node_modules/,
                loaders: [
                    "react-hot",
                    "babel?presets[]=react,presets[]=es2015"
                ]
            }
        ]
    }
};

bootstrapLoaders.forEach(function (loader) {
    webpackConfig.module.loaders.push(loader);
});

module.exports = webpackConfig;