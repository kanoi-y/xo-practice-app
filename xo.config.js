module.exports = {
	prettier: true,
	extends: ['plugin:@next/next/core-web-vitals', 'xo-react'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'n/prefer-global/process': ['error', 'always'],
		'new-cap': 'off',
	},
	ignores: ['next-env.d.ts', 'next.config.js', 'postcss.config.js', 'xo.config.js'],
};
