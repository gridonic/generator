/**
 * The current default gridonic setup for vue projects
 *
 * NOTES
 * Changes to standard template:
 *
 * DONE
 * # Config files
 * - .editorconfig: add typescript specific stuff and settings we use in most projects
 * - .eslintrc.js: class-methods-use-this -> OFF
 * - .gitignore: .idea from https://www.gitignore.io/api/phpstorm
 * - .node-version: add
 * - .stylelintrc: add from a recent project
 * - package.json: remove all dependencies, replace name by <%= project %>
 *
 * # Env
 * - Add .env, .env.stage, .env.prod by default
 *
 * TODO
 * - Remove or replace views, components and test of standard template
 * - Add configuration tests
 * - Add default gitlab.ci
 *
 */
module.exports = {
    name: 'Vue.js Gridonic - Opinionated template for Gridonic Projects using vue-cli 4',
    value: 'vue',
    variables: {
        sentryDsn: ''
    },
    // TODO: retrieved answer gets not written into .env.prod / .env.stage, why?
    // async onPrompting(generator) {
    //     return generator.prompt([{
    //         type: 'string',
    //         name: 'sentryDsn',
    //         message: 'Enter the sentry DSN for this project, if you already know it:',
    //     }]);
    // },
    files: [
        '.browserslistrc',
        '.editorconfig',
        '.env',
        '.env.prod',
        '.env.stage',
        '.eslintrc.js',
        '.gitignore',
        '.node-version',
        '.stylelintrc',
        'babel.config.js',
        'cypress.json',
        'jest.config.js',
        'package.json',
        'README.md',
        'tsconfig.json',
        'src',
        'tests',
        'public'
    ],
    dependencies: [
        // Depenencies from Vue-Cli
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

        // Depenencies from Vue-Cli
        '@types/jest@^24.0.19',
        '@vue/cli-plugin-babel@^4.1.0',
        '@vue/cli-plugin-e2e-cypress@^4.1.0',
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
        'vue-template-compiler@^2.6.10'
    ]
};
