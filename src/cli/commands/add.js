const path = require('path');

// @see https://github.com/gridonic/log
const { error } = require('@gridonic/log');

const description = 'Adds functionality to your app';

const fn = (args = [], flags = {}) => {
    const yeoman = require('yeoman-environment');
    const env = yeoman.createEnv();
    const pathToGenerator = path.resolve(__dirname, '../../../generators/plugins');

    const [name] = args;

    env.register(pathToGenerator, 'generator:plugins');
    env.run(`generator:plugins ${name}`, flags);
};

module.exports = {
    description,
    fn
};
