const uuidv4 = require('uuid/v4');
const path = require('path');
const merge = require('deepmerge');

// @see https://github.com/yeoman/generator
const Generator = require('yeoman-generator');

// @see https://github.com/gridonic/log
const {info, success} = require('@gridonic/log');

// Import supported kind of projects
const kinds = require('./kinds');

const pkg = require('../../package');

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
            const destinationPath = this.destinationPath(path.join(this.appPath, destination))

            this.fs.copyTpl(
                templatePath,
                destinationPath,
                data
            );
        });

        (exclude || []).forEach((file) => {
            this.fs.delete(this.destinationPath(path.join(this.appPath, file)));
        });

        this.extendPackageJson();
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

    extendPackageJson() {
        const { value } = this.kind;
        const pkgDestinationPath = this.destinationPath(path.join(this.appPath, 'package.json'));

        if (this.fs.exists(pkgDestinationPath)) {
            info(`Extending package.json with generator information`, 1, 1);

            this.fs.extendJSON(pkgDestinationPath, {
                gridonic: {
                    apiToken: this.answers.gridonicApiToken || '',
                    generator: {
                        kind: value,
                        projectId: uuidv4(),
                        version: pkg.version,
                    },
                }
            });
        }
    }
};
