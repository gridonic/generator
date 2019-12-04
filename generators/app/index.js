const path = require('path');

// @see https://github.com/yeoman/generator
const Generator = require('yeoman-generator');

// @see https://github.com/gridonic/log
const { info, success } = require('@gridonic/log');

// Import supported kind of projects
const kinds = require('./kinds');

// @see https://yeoman.io/authoring/running-context.html
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.argument('appname', {
            type: String,
            required: true
        });

        this.appPath = this.destinationPath(this.options.appname);
    }

    async prompting() {
        this.answers = await this.prompt([{
            type: 'list',
            name: 'targetKind',
            message: 'What kind of project is it?',
            choices: kinds.map(({ name, value }) => ({ name, value }))
        }]);
    }

    async writing() {
        const { value, files } =
            kinds.find(kind => kind.value === this.answers.targetKind);

        if (Array.isArray(files) === false || files.length < 1) {
            return;
        }

        info('Copying boilerplate files…', 1, 1);

        files.forEach((file) => {
            let source;
            let destination;

            const data = {
                project: this.options.appname
            };

            if (Array.isArray(file)) {
                [source, destination] = file;
            } else {
                source = destination = file;
            }

            this.fs.copyTpl(
                this.templatePath(path.join(value, source)),
                this.destinationPath(path.join(this.appPath, destination)),
                data
            )
        });
    }

    async install() {
        const { devDependencies, dependencies, onInstall } =
            kinds.find(kind => kind.value === this.answers.targetKind);

        if (onInstall) {
            await onInstall(this.options);
        }

        Object.entries({ devDependencies, dependencies }).forEach(
            ([key, value]) => {
                if (Array.isArray(value) === false || value.length < 1) {
                    return;
                }

                info(`Installing ${key}…`, 1, 1);

                this.npmInstall(value, {
                    prefix: this.appPath,
                    saveDev: key === 'devDependencies'
                });
            }
        );
    }

    end() {
        success('Done. Happy coding! ✌️', 1, 1);
    }
};
