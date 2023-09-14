module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    semi: 2,
    'import/no-extraneous-dependencies': 0,
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 0,
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-unused-vars': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'import/order': 0,

    'no-console': 'warn',

    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/no-useless-constructor': 0,
    'prettier/prettier': 'error',
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
        customValidators:
          []
      },
    ],
  },
};
