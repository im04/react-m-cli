'use strict'
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
	devtool: false,
	plugins: [
		new UglifyJsPlugin({
		  uglifyOptions: {
			compress: {
			  warnings: false
			}
		  },
		  parallel: true
		}),
		/*new ExtractTextPlugin({
		  filename: utils.assetsPath('css/[name].[contenthash].css'),
		  allChunks: true,
		}),*/
		new OptimizeCSSPlugin({
		  cssProcessorOptions: true
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: utils.assetsPath('./index.html'),
			inject: true,
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true
			},
			chunksSortMode: 'dependency'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new CompressionWebpackPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: new RegExp('\\.(js|css)$'),
			threshold: 10240,
			minRatio: 0.8
		})
	]
});

module.exports = webpackConfig;
