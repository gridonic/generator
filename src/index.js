const cli = require('./cli');
const ProjectVerifier = require('./test/ProjectVerifier');

module.exports = {
    cli,
    projectVerifier: new ProjectVerifier(),
};
