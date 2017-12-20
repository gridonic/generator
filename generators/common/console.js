const Chalk = require('chalk');

module.exports = class {

    constructor(generator) {
        this.generator = generator;
    }

    main(message) {
        this.generator.log(Chalk.bold.blue(`\n${message}\n`));
    }

    command(message) {
        this.generator.log(Chalk.blue(message));
    }
};
