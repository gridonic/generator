module.exports = {
    name: 'module',
    value: 'store-module',
    description: 'Add a store module to the application',
    input: [{
        type: 'input',
        name: 'moduleName',
        message: 'The name of the store module (E.g., "Auth" for AuthModule)',
    }, {
        type: 'input',
        name: 'moduleFolder',
        message: 'The target directory for the store module. Should probably be in a domain folder',
        default: (answers) => {
            return `src/domain/${answers.moduleName.toLowerCase()}`;
        },
    }],
    jobs: [
        {
            source: 'Module.ts',
            target: '<% moduleFolder %>/<% moduleName %>Module.ts',
        },
    ],
};
