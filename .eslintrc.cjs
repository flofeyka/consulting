module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "plugin:@typescript-eslint/eslint-recommended",
    'plugin:react-hooks/recommended',
    "@gravity-ui/eslint-config",
    "@gravity-ui/eslint-config/client",
    "@gravity-ui/eslint-config/import-order",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true
      }
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
      },
    },
  },
}
