const Generator = require('yeoman-generator');
// const Path = require('path');

module.exports = class extends Generator {
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
        // TODO: parameters
        this.spawnCommandSync('composer', ['create-project', 'symfony/skeleton', './', '-v']);
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
    }

    /**
     * Called last, cleanup, say good bye, etc.
     *
     * @see http://yeoman.io/authoring/running-context.html
     */
    end() {
    }
};
