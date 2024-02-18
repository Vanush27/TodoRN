module.exports = {
  presets: ['module:@react-native/babel-preset', ],
  plugins: [
		[
			'module-resolver',
			{
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.js',
					'.json',
				],
				alias: {
					'@redux': ['./src/redux'],
					'@assets': ['./src/assets'],
					'@screens': ['./src/screens'],
					'@hooks': ['./src/hooks'],
					'@services': ['./src/services'],
					'@navigators': ['./src/navigators'],
					'@components': ['./src/components'],
					'@constants': ['./src/constants'],
					  "@types": ["./src/types"],
					  "@utils": ["./src/utils"],

				},
				root: ['.'],
			},
		],
	],

};
