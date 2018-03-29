// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: false,
		codeFrame: false
	},
	/*env: {
		browser: true,
		commonjs: true,
		es6: true
	},*/
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		// 'plugin:react/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard',
		'plugin:react/recommended'
	],
	plugins: [
		'react'
	],
  // add your custom rules here
	rules: {
    	"react/react-in-jsx-scope": 0,
		"react/prop-types": 0,
		"no-tabs": "off",
		"strict": 0,
		'arrow-parens': 0,
		'generator-star-spacing': 0,
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': 0,
		'space-before-function-paren': 0,
		"indent": [2, 'tab'],
		"semi": [2, "always"],
	}
};
