module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',

    // Remove some too restrictive typesript rules
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-this-alias': 'off',

    // Fix indent in vue files
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      ignores: [],
    }],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  ignorePatterns: [
    'src/stories/',
    'tests/e2e/',
    'node_modules/',
    'jest.config.js',
    'postcss.config.js',
    'eslintrc.js',
    'babel.config.js',
    'vue.config.js',
    '**/*.d.ts',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
};
