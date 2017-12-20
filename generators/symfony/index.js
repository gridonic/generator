const Composer = require('../common/composer');
const Console = require('../common/console');

const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    constructor(args, options) {
        super(args, options);

        this.console = new Console(this);
        this.composer = new Composer(this);
    }

    /**
     * Your initialization methods (checking current project state, getting
     * configs, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    initializing() {
        this.log('Setting up a new symfony project...');
    }

    /**
     * Where you prompt users for options (where you'd call this.prompt()).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    prompting() {
        const prompts = [{
            type: 'checkbox',
            name: 'composer',
            message: 'Which addtional bundles will you need?',
            choices: [{
                name: 'Doctrine',
                value: 'doctrine',
                checked: true
            }, {
                name: 'Security',
                value: 'security',
                checked: true
            }, {
                name: 'Easy Admin Bundle',
                value: 'easyAdmin',
                checked: false
            }],
        }];

        return this.prompt(prompts).then((answers) => {
            this.answers = answers;
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
        this._installSymfony();

        this._installDefaultDependencies();
        this._installCustomDependencies();
    }

    /**
     * Where you write the generator specific files (routes, controllers, etc).
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    writing() {
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
        this.composer.install();
    }

    /**
     * Called last, cleanup, say good bye, etc.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    end() {
    }

    /**
     * Calls the symfony installer to create the base skeleton
     *
     * @private
     */
    _installSymfony() {
        this.console.main('Executing symfony installer...');

        this.spawnCommandSync('composer', ['create-project', 'symfony/skeleton', './', '-v']);
    }

    /**
     * Installs the default composer modules always required for our projects
     *
     * @private
     */
    _installDefaultDependencies() {
        this.console.main('Installing default dependencies...');

        this.composer.require('annotations');
        this.composer.require('twig');
    }

    _installCustomDependencies() {
        if (this.answers.composer.includes('doctrine')) {
            this.composer.require('doctrine');
        }

        if (this.answers.composer.includes('security')) {
            this.composer.require('security');
        }

        if (this.answers.composer.includes('easyAdmin')) {
            this.composer.require('admin');
        }
    }
};
