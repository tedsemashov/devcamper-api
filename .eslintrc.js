module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'as-needed'],
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'max-len': ['error', { code: 120 }],
  },
};
