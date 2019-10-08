let webpackConfig = {
	entry: "./src/index.js",
	output: {
		filename: "re-mind.js",
		library: "MM",
		libraryTarget: "umd",
		libraryExport: "default" // 默认导出
	},
	externals: {
		react: "react", //打包时候排除react
		antd: "antd",
		reactDom: "react-dom",
		moment: "moment"
	},
	optimization: {
		minimize: false
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [["@babel/preset-env"], "@babel/preset-react"],
							plugins: [
								["@babel/plugin-proposal-decorators", { legacy: true }],
								["@babel/plugin-proposal-class-properties", { loose: true }],
								"@babel/plugin-transform-runtime"
							]
						}
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
							javascriptEnabled: true
						}
					}
				]
			}
		]
	}
};
module.exports = webpackConfig;
