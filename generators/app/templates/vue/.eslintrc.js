module.exports = {
    extends: [

        // @see https://www.npmjs.com/package/eslint-config-airbnb-base
        'airbnb-base',

        // @see https://github.com/vuejs/eslint-plugin-vue
        // @see https://vuejs.github.io/eslint-plugin-vue/rules/
        'plugin:vue/recommended'

    ],

    // @see https://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        browser: true
    },

    // @see https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        ecmaVersion: 6,
        parser: 'babel-eslint',
        sourceType: 'module'
    },

    // @see https://www.npmjs.com/package/eslint-import-resolver-webpack
    settings: {
        'import/resolver': 'webpack'
    }
};
