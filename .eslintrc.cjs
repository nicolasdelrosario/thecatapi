module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'eslint:recommended',
	ignorePatterns: ['.eslintrc.cjs', 'postcss.config.js', tailwind.config.js],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
}
