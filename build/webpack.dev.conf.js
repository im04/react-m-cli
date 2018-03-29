'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('../config/config');


const devWebpackConfig = merge(baseWebpackConfig, {
	mode: 'development',
	devtool: '#source-map',
	entry: {
		app: ['webpack-dev-server/client?http://127.0.0.1:' + devConfig.port, 'webpack/hot/dev-server']
	},
	devServer: {
		hot: true,
		inline:true,
		// contentBase: false, // since we use CopyWebpackPlugin.
		// compress: true,
		host: devConfig.host,
		port: devConfig.port,
		open: true,
		// overlay: true,
		// publicPath:'./',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: '../index.html',
			inject: true
		})
  ]
})

module.exports = devWebpackConfig;
