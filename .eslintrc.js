module.exports = {
  root: true,
  extends: [
		'@react-native',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'prettier'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: ['./tsconfig.json'],
	},
  "react/self-closing-comp": ["error", {
    "component": true,
    "html": true
  }]

};
