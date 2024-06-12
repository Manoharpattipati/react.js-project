import eslintPlugin from '@typescript-eslint/eslint-plugin'
import eslintParser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: eslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        jsx: true, // Enable JSX parsing
      },
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
    },
    rules: {
      ...eslintPlugin.configs.recommended.rules,
      // Add your custom rules here
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      jsx: true, // Enable JSX parsing
    },
    rules: {
      // Add your custom rules here
    },
  },
]
