module.exports = {
    name: 'Legacy Vue.js - As used up until 2019 by Gridonic',
    value: 'vue-legacy',
    files: [
        '.browserslistrc',
        '.editorconfig',
        '.eslintrc.js',
        '.gitignore',
        '.node-version',
        '.stylelintrc',
        'babel.config.js',
        'package.json',
        'postcss.config.js',
        'src/App.vue',
        'src/html/index.ejs',
        'src/index.js',
        'webpack.config.js',
    ],
    dependencies: [
        '@babel/runtime@^7.4.5',
    ],
    devDependencies: [
        '@babel/core@^7.4.5',
        '@babel/plugin-syntax-dynamic-import@^7.2.0',
        '@babel/plugin-transform-async-to-generator@^7.4.4',
        '@babel/plugin-transform-runtime@^7.4.4',
        '@babel/preset-env@^7.4.5',
        '@gridonic/webpack@^1.2.2',
        'autoprefixer@^9.6.0',
        'babel-eslint@^10.0.2',
        'core-js@^3',
        'cssnano@^4.1.10',
        'eslint@^6.0.1',
        'eslint-config-airbnb-base@^13.2.0',
        'eslint-import-resolver-webpack@^0.11.1',
        'eslint-loader@^2.2.1',
        'eslint-plugin-import@^2.18.0',
        'eslint-plugin-vue@^5.2.3',
        'nodent-runtime@^3.2.1',
        'postcss-lh@^2.0.2',
        'postcss-replace@^1.0.6',
        'stylelint@^10',
        'stylelint-config-rational-order@^0.1.2',
        'stylelint-config-standard@^18.3.0',
        'stylelint-order@^3.0.1',
        'stylelint-rscss@^0.4.0',
        'stylelint-scss@^3.11.1',
    ]
};