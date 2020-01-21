const path = require('path');
const merge = require('deepmerge');

// @see https://github.com/yeoman/generator
const Generator = require('yeoman-generator');

// @see https://github.com/gridonic/log
const {info, success} = require('@gridonic/log');

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
            choices: kinds.map(({name, value}) => ({name, value}))
        }]);

        this.kind = kinds.find(kind => kind.value === this.answers.targetKind);

        if (this.kind.baseKind) {
            const baseKind = kinds.find(kind => kind.value === this.kind.baseKind);

            this.kind = merge(baseKind, this.kind);
        }

        const { onPrompting } = this.kind;

        if (onPrompting) {
            this.answers = Object.assign(
                {},
                this.answers,
                await onPrompting(this)
            );
        }
    }

    async writing() {
        const {value, baseKind, files, exclude, variables} = this.kind;

        if (Array.isArray(files) === false || files.length < 1) {
            return;
        }

        info('Copying boilerplate files…', 1, 1);

        const data = Object.assign({},
            variables || {},
            this.answers,
            {
                project: this.options.appname
            });

        files.forEach((file) => {
            let source;
            let destination;

            if (Array.isArray(file)) {
                [source, destination] = file;
            } else {
                source = destination = file;
            }

            const baseTemplatePath = this.templatePath(path.join(baseKind || value, source));
            const overridenTemplatePath = this.templatePath(path.join(value, source));

            const templatePath = this.fs.exists(overridenTemplatePath) ? overridenTemplatePath : baseTemplatePath;

            this.fs.copyTpl(
                templatePath,
                this.destinationPath(path.join(this.appPath, destination)),
                data
            )
        });

        (exclude || []).forEach((file) => {
            this.fs.delete(this.destinationPath(path.join(this.appPath, file)));
        })
    }

    async install() {
        const {devDependencies, dependencies, onInstall} = this.kind;

        if (onInstall) {
            await onInstall(this);
        }

        Object.entries({devDependencies, dependencies}).forEach(
            ([key, value]) => {
                if (Array.isArray(value) === false || value.length < 1) {
                    return;
                }

                info(`Installing ${key}…`, 1, 1);

                console.log(key);
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
