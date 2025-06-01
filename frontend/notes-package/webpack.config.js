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
        publicPath: "auto",
    },
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        port: 4000,
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
            name: "notePackage",
            filename: "remoteEntry.js",
            exposes: {
                "./NoteApp": "./src/App", // Export component, Multiple export also allowedd
            },
            shared: {                     // Add shared library
                react: { singleton: true, requiredVersion: false },
                "react-dom": { singleton: true, requiredVersion: false },
                "@radix-ui/themes": {
                    singleton: true,
                    requiredVersion: false,
                    version: "3.2.1",
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
            },
        }),
    ],
    resolve: {
        extensions: [".js", ".jsx"],
    },
};
