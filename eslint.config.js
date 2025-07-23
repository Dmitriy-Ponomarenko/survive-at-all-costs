import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // ✅ Поддержка современного JS
      sourceType: 'module',
      globals: {
        ...globals.browser, // ✅ Глобальные переменные браузера (window, document и т.д.)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ✅ JSX поддержка
        },
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      prettier: prettier,
    },
    rules: {
      // ✅ React
      'react/react-in-jsx-scope': 'off', // ❌ Устаревшее правило, не нужно с новым JSX
      'react/prop-types': 'off', // ❌ Можно отключить, если не используешь PropTypes
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',

      // ✅ React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // ✅ Import
      'import/order': ['warn', { alphabetize: { order: 'asc' } }],
      'import/no-unresolved': 'off',

      // ✅ JSX Accessibility
      'jsx-a11y/alt-text': 'warn',

      // ✅ Prettier
      'prettier/prettier': 'warn',
    },
    settings: {
      react: {
        version: 'detect', // Автоматически определяет версию React
      },
    },
  },
]);
