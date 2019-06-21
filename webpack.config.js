const path                   = require("path");
const HTMLWebpackPlugin      = require("html-webpack-plugin");
const DotEnv                 = require("dotenv-webpack"); //https://github.com/mrsteele/dotenv-webpack
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack                = require("webpack");

module.exports = {
    mode: "development",

    entry: {
        app: "./src/index.js"
    },

    output: {
        // Where the bundled files will go
        path: path.resolve(__dirname, "dist"),

        // The name of the final js file to be embedded into the main html file
        /* Webpack will generate a separate file for each key in the 'entry' object.
         * It will replace the [name] placeholder with the key(s) in the 'entry' object.
         * In this case there are 2 keys "app" and "print". The generated file names will be
         * 'app.bundle.js' and 'print.bundle.js'.*/
        filename: "[name].bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/, // Matches .js or .jsx
                include: [
                    path.resolve(__dirname, "./src"),
                ],
                use: ["babel-loader"]
                // I have put the babel loader options in .babelrc as advised by the babel team
            },
            {
                test: /\.css$/,
                // Loaders to use
                use: ["style-loader", "css-loader"]
            }
        ],
    },

    plugins: [
        // A webpack plugin to remove/clean your build folder(s).
        new CleanWebpackPlugin(),

        /*  HtmlWebpackPlugin by default will generate its own index.html file.
         *  it automatically inject all necessary CSS, JS, manifest and favicon
         *  files into the HTML file.
         */
        new HTMLWebpackPlugin({
            title: "React Weather App with Webpack and Babel from scratch",
            // CSS, JS... will be included in the respective html tags
            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html")
        }),

        new DotEnv(),

        new webpack.HotModuleReplacementPlugin()
    ],

    devtool: "inline-source-map",

    devServer: {

        /* Tell the server where to serve content from.
         * link https://webpack.js.org/configuration/dev-server/#devservercontentbase
         */
        contentBase: path.resolve(__dirname, "./dist"),

        /* Enable webpack's Hot Module Replacement feature
         * link https://webpack.js.org/configuration/dev-server/#devserverhot
         */
        hot: true
    }
};