module.exports = {
    name: 'Library - Template for a tree shakable library',
    value: 'library',
    files: [
        // Config files
        '.browserslistrc',
        '.editorconfig',
        '.eslintrc.js',
        '.gitignore',
        '.node-version',
        '.stylelintrc',
        'babel.config.js',
        'jest.config.js',
        'package.json',
        'README.md',
        'tsconfig.json',

        // Folders
        'src',
        'tests',
    ],
    dependencies: [
        // Vuex class decorators
        'vuex-class@^0.3.2',

        // Dependencies from Vue-Cli
        'core-js@^3.4.3',
        'register-service-worker@^1.6.2',
        'vue@^2.6.10',
        'vue-class-component@^7.0.2',
        'vue-property-decorator@^8.3.0',
        'vue-router@^3.1.3',
        'vuex@^3.1.2'
    ],
    devDependencies: [
        // Vue-Cli Version for this template
        '@vue/cli@^4.1.1',

        // Lint-staged, for gitHooks
        'lint-staged@^9.5.0',

        // Integrate style linting
        'stylelint@^11.1.1',
        'stylelint-config-rational-order@^0.1.2',
        'stylelint-config-standard@^19.0.0',
        'stylelint-order@^3.1.1',
        'stylelint-scss@^3.13.0',

        // Dependencies from Vue-Cli
        '@types/jest@^24.0.19',
        '@vue/cli-plugin-babel@^4.1.0',
        '@vue/cli-plugin-eslint@^4.1.0',
        '@vue/cli-plugin-pwa@^4.1.0',
        '@vue/cli-plugin-router@^4.1.0',
        '@vue/cli-plugin-typescript@^4.1.0',
        '@vue/cli-plugin-unit-jest@^4.1.0',
        '@vue/cli-plugin-vuex@^4.1.0',
        '@vue/cli-service@^4.1.0',
        '@vue/eslint-config-airbnb@^4.0.0',
        '@vue/eslint-config-typescript@^4.0.0',
        '@vue/test-utils@1.0.0-beta.29',
        'eslint@^5.16.0',
        'eslint-plugin-vue@^5.0.0',
        'sass@^1.23.7',
        'sass-loader@^8.0.0',
        'typescript@~3.5.3',
        'vue-template-compiler@^2.6.10',
]
};
