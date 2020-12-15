const path = require('path');

module.exports = {
    mode: "development",
    entry: "/build/client/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
        publicPath: "/public/",
    },
};