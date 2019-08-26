module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-shadow': 'off',
    'object-curly-spacing': ["error", "never"],
    'jsx-quotes': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'import/order': 'off',
	'indent': [2,'tab'],
	'no-tabs': 'off',
	'react/jsx-indent': 'off'
  },
};
