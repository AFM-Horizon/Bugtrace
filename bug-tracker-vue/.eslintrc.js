module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'arrow-parens': 'off'
  }
};
