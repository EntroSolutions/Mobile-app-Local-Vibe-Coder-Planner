module.exports = {
  root: true,
  extends: ['expo', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'warn',
  },
  ignorePatterns: ['/dist/*', '/.expo/*', '/node_modules/*', 'jest.config.js', 'babel.config.js'],
};
