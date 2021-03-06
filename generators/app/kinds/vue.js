/**
 * The current default gridonic setup for vue projects
 *
 * # NOTES
 * Changes to standard template:
 *
 * # DONE
 * ## Config files
 * - .editorconfig: add typescript specific stuff and settings we use in most projects
 * - .eslintrc.js: class-methods-use-this -> OFF
 * - .gitignore: .idea from https://www.gitignore.io/api/phpstorm
 * - .node-version: add
 * - .stylelintrc: add from a recent project
 * - package.json:
 *      - remove all dependencies, replace name by <%= project %>
 *      - add githooks and lint-staged
 * - vue.config.js: add with https configuration
 *
 * ## src
 * - Remove or replace views, components and test of standard template
 * - Refactor Store to use classes
 * - Refactor Router to use classes
 *
 * ## Env
 * - Add .env, .env.stage, .env.prod by default
 *
 * ## Tests
 * - Add tests for verifying project setup
 *
 *
 * # TODO
 *
 * - Add default gitlab.ci
 * - Show message at the end to run `npm run test:unit` to check the configuration
 *
 */
module.exports = {
    name: 'Vue.js Gridonic - Opinionated template for Gridonic Projects using vue-cli 4',
    value: 'vue',
    variables: {
        sentryDsn: ''
    },
    async onPrompting(generator) {
        return generator.prompt([{
            type: 'string',
            name: 'sentryDsn',
            message: 'Enter the sentry DSN for this project, if you already know it:',
            when: () => !generator.answers.sentryDsn,
        }, {
            type: 'string',
            name: 'gridonicApiToken',
            message: 'Enter the gridonic Api Token. You can find it here:\n\t-> https://git.gridonic.ch/gridonic/gridonic-api/issues/1:',
            when: () => !generator.answers.gridonicApiToken,
        }
        ]);
    },
    files: [
        // Config files
        '.browserslistrc',
        '.editorconfig',
        '.env',
        '.env.prod',
        '.env.stage',
        '.eslintrc.js',
        ['gitignore', '.gitignore'], // .gitignore is ignored by npm publish, so map it from 'gitignore'
        '.node-version',
        '.stylelintrc',
        'babel.config.js',
        'cypress.json',
        'jest.config.js',
        'package.json',
        'README.md',
        'tsconfig.json',
        'vue.config.js',

        // Folders
        'src',
        'tests',
        'public'
    ],
    dependencies: [
        // Gridonic Client Services & Components
        '@gridonic/client-services@^0.3.0',
        '@gridonic/components@^0.2.1',

        // Dependencies from Vue-Cli
        'core-js@^3.6.4',
        'register-service-worker@^1.7.1',
        'vue@^2.6.11',
        'vue-router@^3.1.6',
        'vuex@^3.1.3',
        'vue-i18n@^8.15.4'
    ],
    devDependencies: [
        // Gridonic Generator
        `@gridonic/generator`,

        // Vue-Cli Version for this template
        '@vue/cli@^4.2.3',

        // Dot-Env, for configuration testing purposes
        'dotenv@^8.2.0',

        // Lint-staged, for gitHooks
        'lint-staged@^10.0.8',

        // Integrate style linting
        'stylelint@^11.1.1',
        'stylelint-config-standard@^19.0.0',
        'stylelint-order@^3.1.1',
        'stylelint-scss@^3.14.2',

        // Post Css plugins
        'postcss-lh@^2.0.2',
        'postcss-normalize@^8.0.1',
        'postcss-replace@^1.1.0',

        // Dependencies from Vue-Cli
        '@types/jest@^25.1.3',
        '@typescript-eslint/eslint-plugin@^2.26.0',
        '@typescript-eslint/parser@^2.26.0',
        '@vue/cli-plugin-babel@~4.3.0',
        '@vue/cli-plugin-e2e-cypress@~4.3.0',
        '@vue/cli-plugin-eslint@~4.3.0',
        '@vue/cli-plugin-pwa@~4.3.0',
        '@vue/cli-plugin-router@~4.3.0',
        '@vue/cli-plugin-typescript@~4.3.0',
        '@vue/cli-plugin-unit-jest@~4.3.0',
        '@vue/cli-plugin-vuex@~4.3.0',
        '@vue/cli-service@~4.3.0',
        '@vue/eslint-config-airbnb@^5.0.2',
        '@vue/eslint-config-typescript@^5.0.2',
        '@vue/test-utils@1.0.0-beta.31',
        'eslint@^6.7.2',
        'eslint-plugin-import@^2.20.2',
        'eslint-plugin-vue@^6.2.2',
        'sass@^1.26.3',
        'sass-loader@^8.0.2',
        'typescript@~3.8.3',
        'vue-template-compiler@^2.6.11',
    ]
};
