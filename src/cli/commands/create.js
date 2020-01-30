const path = require('path');

// @see https://github.com/gridonic/log
const { error } = require('@gridonic/log');

const description = 'Scaffolds a new project';

const fn = (args = [], flags = {}, envOpts = {}, done) => {
    const yeoman = require('yeoman-environment');

    const env = yeoman.createEnv([], envOpts);
    const pathToGenerator = path.resolve(__dirname, '../../../generators/app');

    if (args.length < 1) {
        return error('Please provide a project name as first argument.');
    }

    const [name] = args;

    env.register(pathToGenerator, 'generator:app');
    env.run(`generator:app ${name}`, flags, done);
};

module.exports = {
    description,
    fn
};
