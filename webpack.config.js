var path=require('path');
var webpack = require("webpack");
var htmlWebpackPlugin=require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
	mode: 'production',
	entry:{
		home:'./src/js/home.js',
		about:'./src/js/about-1.js',
		contact:'./src/js/contact-1.js',
		customer:'./src/js/customer-1.js',
		details:'./src/js/details-1.js',
		gallery:'./src/js/gallery-1.js',
		Infor:'./src/js/infor-1.js',
		video:'./src/js/video-1.js'
	},
	output:{
		path:path.join(__dirname,'dist'),
		filename:'src/js/[name]-[chunkhash:3].js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			},
			{
				test:/\.js$/,
				use:'babel-loader',
				include:path.resolve(__dirname,'src/js'),
				exclude:path.resolve(__dirname,'node_modules')
			},
			{
				test:/\.html$/,
				use:'html-loader'
			},
			{
				test:/\.(png|jpg|gif|svg)$/i,
				use:[
						'url-loader?limit=1024&name=src/images/[name]-[hash:3].[ext]',
						'image-webpack-loader'
				]
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(['./dist']),
		new htmlWebpackPlugin({
			filename:'index.html',
			template:'index.html',
			inject:'head',
			chunks:['home']
		}),
		new htmlWebpackPlugin({
			filename:'about.html',
			template:'about.html',
			inject:'head',
			chunks:['about']
		}),
		new htmlWebpackPlugin({
			filename:'contact.html',
			template:'contact.html',
			inject:'head',
			chunks:['contact']
		}),
		new htmlWebpackPlugin({
			filename:'customer.html',
			template:'customer.html',
			inject:'head',
			chunks:['customer']
		}),
		new htmlWebpackPlugin({
			filename:'gallery.html',
			template:'gallery.html',
			inject:'head',
			chunks:['gallery']
		}),
		new htmlWebpackPlugin({
			filename:'details.html',
			template:'details.html',
			inject:'head',
			chunks:['details']
		}),
		new htmlWebpackPlugin({
			filename:'Infor.html',
			template:'Infor.html',
			inject:'head',
			chunks:['Infor']
		}),
		new htmlWebpackPlugin({
			filename:'new.html',
			template:'new.html',
			inject:'head',
			chunks:['Infor']
		}),
		new htmlWebpackPlugin({
			filename:'shopping.html',
			template:'shopping.html',
			inject:'head',
			chunks:['Infor']
		}),
		new htmlWebpackPlugin({
			filename:'video.html',
			template:'video.html',
			inject:'head',
			chunks:['video']
		})
	]
}