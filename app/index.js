const Generator = require('yeoman-generator');
const Path = require('path');
const Yosay = require('yosay');

module.exports = class extends Generator {
    /**
     * Your initialization methods (checking current project state, getting
     * configs, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    initializing() {
        this.pkg = require('../package.json');

        this.log(Yosay('Hello, and welcome to the Gridonic generator!'));
    }

    /**
     * Where you prompt users for options (where you'd call this.prompt()).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'project',
            message: 'What’s your project folder going to be?',
            default: this.appname // Default to current folder name
        },{
            type: 'checkbox',
            name: 'sass',
            message: 'What kind of Sass features do you need?',
            choices: [{
                name: 'Gridonic Sass foundation (https://github.com/gridonic/sass)',
                value: '@gridonic/sass',
                short: 'Gridonic Sass foundation',
                checked: true
            }]
        }]).then((answers) => {
            this.answers = answers;
            this.appPath = this.destinationPath(this.answers.project);
        });
    }

    /**
     * Saving configurations and configure the project (creating .editorconfig
     * files and other metadata files).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    configuring() {}

    /**
     * If the method name doesn't match a priority, it will be pushed to this
     * group.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    default() {}

    /**
     * Where you write the generator specific files (routes, controllers, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    writing() {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath(`${this.appPath}/package.json`),
            {
                project: this.answers.project,
                description: this.answers.description || ''
            }
        );
    }

    /**
     * Where conflicts are handled (used internally).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    conflicts() {}

    /**
     * Where installation are run (npm, bower).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    install() {
        if (this.answers.sass.includes('@gridonic/sass')) {
            this.npmInstall(['@gridonic/sass'], {
                prefix: this.appPath,
            }, () => {
                this.fs.copy(
                    Path.join(this.appPath, 'node_modules', '@gridonic/sass', '**'),
                    Path.join(this.appPath, 'src', 'sass')
                );
            });
        }
    }

    /**
     * Called last, cleanup, say good bye, etc.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    end() {}
};
