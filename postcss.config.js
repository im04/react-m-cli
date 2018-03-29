// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
	ident: 'postcss',
	plugins: [
		require("postcss-import")(),
		require('postcss-modules-values')(),
		require("postcss-url")()
	]
};
