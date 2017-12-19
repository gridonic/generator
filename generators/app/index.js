const Generator = require('yeoman-generator');
const Chalk = require('chalk');
const Path = require('path');
const Platform = require('../common/platform');
const Yosay = require('yosay');

module.exports = class extends Generator {
    /**
     * Your initialization methods (checking current project state, getting
     * configs, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    initializing() {
        // this.pkg = require('../../package.json');
        this.log(Yosay('Hello, and welcome to the Gridonic generator!'));
        this.log(`Today, we will create the project ${Chalk.bold(this.appname)} for you.`);
    }

    /**
     * Where you prompt users for options (where you'd call this.prompt()).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    prompting() {
        const prompts = [{
            type: 'list',
            name: 'main.platform',
            message: 'What type of project do you want to create?',
            choices: [
                {value: Platform.Symfony, name: 'Symfony'},
                {value: Platform.Drupal, name: 'Drupal (Not supported yet)'},
            ],
            default: Platform.Symfony
        },
            //     {
            //     type: 'checkbox',
            //     name: 'sass',
            //     message: 'What kind of Sass features do you need?',
            //     choices: [{
            //         name: 'Gridonic Sass foundation (https://github.com/gridonic/sass)',
            //         value: '@gridonic/sass',
            //         short: 'Gridonic Sass foundation',
            //         checked: true
            //     }]
            // }
        ];

        return this.prompt(prompts).then((answers) => {
            // this.appPath = this.destinationPath();
            this.answers = answers;

            const platform = this.answers.main.platform;

            if (platform === Platform.Symfony) {
                this.composeWith(require.resolve('../symfony'));
            } else if (platform === Platform.Drupal) {
                this.log.error('Drupal is not supported yet!')
            } else {
                this.log.error('No valid platform selected!');
            }

        });
    }

    /**
     * Saving configurations and configure the project (creating .editorconfig
     * files and other metadata files).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    configuring() {
    }

    /**
     * If the method name doesn't match a priority, it will be pushed to this
     * group.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    default() {
    }

    /**
     * Where you write the generator specific files (routes, controllers, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    writing() {
        // this.fs.copyTpl(
        //     this.templatePath('package.json'),
        //     this.destinationPath(`${this.appPath}/package.json`),
        //     {
        //         project: this.answers.project,
        //         description: this.answers.description || ''
        //     }
        // );
    }

    /**
     * Where conflicts are handled (used internally).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    conflicts() {
    }

    /**
     * Where installation are run (npm, bower).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    install() {
        // if (this.answers.sass.includes('@gridonic/sass')) {
        //     this.npmInstall(['@gridonic/sass'], {
        //         prefix: this.appPath,
        //     }, () => {
        //         this.fs.copy(
        //             Path.join(this.appPath, 'node_modules', '@gridonic/sass', '**'),
        //             Path.join(this.appPath, 'src', 'sass')
        //         );
        //     });
        // }
    }

    /**
     * Called last, cleanup, say good bye, etc.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    end() {
    }
};
