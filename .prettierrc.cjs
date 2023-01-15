module.exports = {
  tabWidth: 2,
  arrowParens: 'avoid',
  endOfLine: 'crlf',
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrderSeparation: true,
  importOrder: [
    '^(react|next(.*))$',
    '<THIRD_PARTY_MODULES>',
    '^@/components(.*)$',
    '^@/(hooks|store/hooks(.*))$',
    '^@/store(.*)$',
    '^@/context(.*)$',
    '^@/services(.*)$',
    '^@/types(.*)$',
    '^@/(.*)$',
    '^(.*)(sass|css|scss)$'
  ],
  importOrderSortSpecifiers: true
};
