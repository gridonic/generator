const path = require('path');

// @see https://github.com/gridonic/log
const { error } = require('@gridonic/log');

const description = 'Scaffolds a new project';

const fn = (args = [], flags = {}) => {
    const yeoman = require('yeoman-environment');
    const env = yeoman.createEnv();
    const pathToGenerator = path.resolve(__dirname, '../../../generators/app');

    if (args.length < 1) {
        return error('Please provide a project name as first argument.');
    }

    const [name] = args;

    env.register(pathToGenerator, 'generator:app');
    env.run(`generator:app ${name}`, flags);
};

module.exports = {
    description,
    fn
};
