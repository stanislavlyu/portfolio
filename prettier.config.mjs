const config = {
	arrowParens: 'always',
	semi: false,
	endOfLine: 'auto',
	singleQuote: false,
	tabWidth: 2,
	trailingComma: 'es5',
	plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
	importOrder: ['^react|^next(/.*|$)', '^@/(.*|$)', '^../(.*|$)', '^./(.*|$)'],
	importOrderSeparation: false,
	importOrderSortSpecifiers: false,
}

export default config
