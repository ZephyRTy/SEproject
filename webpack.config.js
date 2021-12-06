import htmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
let __dirname = path.resolve();
export default {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.join(__dirname, '/docs'),
		filename: 'app.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	target: 'web',
	module: {
		// 所有第三方模块的匹配规则， webpack默认只能处理.js后缀名的文件，需要安装第三方loader
		rules: [
			// {
			// 	test: /\.(js|jsx)$/,
			// 	use: {
			// 		loader: 'babel-loader',
			// 		options: {
			// 			presets: ['@babel/preset-env']
			// 		}
			// 	},
			// 	exclude: /(node_modules|bower_components)/ // 千万别忘记添加exclude选项,不然运行可能会报错
			// },
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				],
				exclude: [path.resolve(__dirname, '..', 'node_modules')]
			}
		]
	},
	plugins: [
		//初始化插件
		new htmlWebpackPlugin()
	]
};