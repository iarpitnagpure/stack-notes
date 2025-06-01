// webpack.config.js
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import dotenv from "dotenv";

dotenv.config();

export default {
    entry: "./src/index.js",
    output: {
        path: path.resolve("dist"),
        filename: "[name].bundle.js",
        publicPath: "auto",
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
        new webpack.container.ModuleFederationPlugin({
            name: "notePackageShell",
            remotes: {
                notesAppPackage: "notePackage@http://localhost:4000/remoteEntry.js",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: false,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: false,
                },
                zustand: { singleton: true },
                "@radix-ui/themes": {
                    singleton: true,
                    requiredVersion: false,
                    version: "3.2.1"
                },
                "@mui/icons-material": {
                    singleton: true,
                    requiredVersion: false
                },
                "@mui/material": {
                    singleton: true,
                    requiredVersion: false,
                },
                'react-toastify': {
                    singleton: true,
                    requiredVersion: false
                }
            }
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
