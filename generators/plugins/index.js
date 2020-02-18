const path = require('path');
const chalk = require('chalk');

// @see https://github.com/yeoman/generator
const Generator = require('yeoman-generator');

// @see https://github.com/gridonic/log
const {info, success, error} = require('@gridonic/log');

// Import supported plugins
const plugins = require('./plugins');

// @see https://yeoman.io/authoring/running-context.html
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);

        this.successful = true;

        this.argument('pluginName', {
            type: String,
            required: true
        });

        this.plugin = plugins.find(plugin => plugin.name === this.options.pluginName);
        if (!this.plugin) {
            info('plugin does not exist\n');

            info('available plugins:\n' +
                plugins.map(p => `${chalk.bold(p.name)} - ${p.description}`).join('\n') +
                '\n');

            process.exit(1);
        }

        this.appPath = this.destinationPath();
    }

    async prompting() {
        const {input} = this.plugin;

        this.answers = await this.prompt(input);
    }

    async writing() {
        const {value, jobs} = this.plugin;

        const data = this.answers;

        jobs.forEach((job) => {
            try {
                if (job.source && job.target) {
                    const source = path.join(value, job.source);

                    const target = job.target.replace(/<% (.*?) %>/g, (match, varname) => {
                        return data[varname] || '';
                    });

                    this.fs.copyTpl(
                        this.templatePath(source),
                        this.destinationPath(path.join(this.appPath, target)),
                        data
                    );
                }

                if (job.run) {
                    job.run(data);
                }
            } catch (e) {
                error(e);
                this.successful = false;
            }
        });
    }

    async install() {
    }

    end() {
        if (this.successful) {
            success('Done. Have fun with your generated code! ✌️', 1, 1);
        }
    }
};
