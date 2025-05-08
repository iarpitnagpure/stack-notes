import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv";

dotenv.config();

export default {
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js",
        publicPath: "/",
    },
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.DefinePlugin({
            "process.env.STACK_NOTES_API_URL": JSON.stringify(process.env.STACK_NOTES_API_URL),
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
