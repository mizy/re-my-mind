const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
let webpackConfig = {
	entry: "./MindMap/index.js",
	output: {
		filename: "[name].[chunkhash].js",
		publicPath: "/"
	},
	mode:  process.env.NODE_ENV??'development',
	resolve: {
		extensions: [".js", ".json"],
		alias: {
			"@": path.join(__dirname, "src")
		}
	},
	devtool: "inline-source-map",
	devServer: {
		port: 777,
		open: true,
		host: "0.0.0.0",
		contentBase: "./public",
		// openPage: "./index.html",
		hot: true,
		publicPath: "/"
	},
	optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
				maxSize:400000,
                chunks: 'all'
              }
            }
        }
    },
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader?cacheDirectory=true",
					}
				]
			},
			{
				test: /\.less$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "less-loader",
						options: {
							lessOptions:{
								javascriptEnabled: true
							}
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [{ loader: "style-loader" }, { loader: "css-loader" }]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: "url-loader"
			},
		]
	},
	plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/demo.html',
            publicPath: process.env.NODE_ENV === 'production' ? '/remind' : '/' 
        }),
        new webpack.ProvidePlugin({
            React: 'react'
        })
    ]

};
module.exports = webpackConfig;
