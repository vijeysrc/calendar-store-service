"use strict";

let webpack = require("webpack"),
    config,
    scriptMapper = {
        service: {
            library: "CalendarService",
            entry: "./src/calendar-service",
            filename: "calendar-service.js"
        },
        store: {
            library: "ReduxCalendarStore",
            entry: "./src/redux-calendar-store",
            filename: "redux-calendar-store.js"
        },
        formatter: {
            library: "DateFormatter",
            entry: "./src/date-formatter",
            filename: "date-formatter.js"
        }
    },
    scriptName = process.env.SCRIPT_NAME,
    env = process.env.NODE_ENV;

config = {
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ["babel?presets[]=react,presets[]=es2015"],
            exclude: /node_modules/
        }]
    },

    entry: scriptMapper[scriptName].entry,

    output: {
        path: "dist",
        library: scriptMapper[scriptName].library,
        filename: scriptMapper[scriptName].filename,
        libraryTarget: "umd",
        umdNamedDefine: true
    }
};

if (env === "production") {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true,
                warnings: false
            }
        })
    )
}

module.exports = config
