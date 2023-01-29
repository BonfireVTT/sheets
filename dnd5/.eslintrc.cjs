module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      jest: true,
    },
    ecmaVersion: '7',
    project: [
      './tsconfig.json',
      './tsconfig.eslint.json',
    ],
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
