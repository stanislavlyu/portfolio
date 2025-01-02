const config = {
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 4,
  "useTabs": true,
  "jsxSingleQuote": true,
  "bracketSpacing": true,
  "arrowParens": "always",
  "plugins": ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  "importOrder": [
    "^react|^next(/.*|$)",
    "^@/(.*|$)",
    "^../(.*|$)",
    "^./(.*|$)"
  ],
  "importOrderSeparation": false,
  "importOrderSortSpecifiers": false
};

export default config;