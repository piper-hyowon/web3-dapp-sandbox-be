module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:prettier/recommended',
		'google',
		'airbnb',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'prettier',
	],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
			}
		]
	},
};
