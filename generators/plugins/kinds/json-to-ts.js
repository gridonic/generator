const JsonToTS = require('json-to-ts');

const { readFromClipboard, writeToClipboard } = require('../lib/clipboard');
const { error, success } = require('@gridonic/log');

module.exports = {
    name: 'json-ts',
    value: 'json-to-ts',
    description: 'Add a store module to the application',
    input: [
        {
            type: 'list',
            name: 'source',
            choices: [
                {
                    name: 'Copy json from clipboard (Recommended)',
                    value: 'clipboard'
                },
                {
                    name: 'Enter json as input',
                    value: 'input'
                }
            ],
        },
        {
            when: (data) => data.source === 'input',
            type: 'input',
            name: 'json',
            message: 'The json input (MUST be single lined for now, sorry):',
        }
    ],
    jobs: [
        {
            run: (data) => {
                const json = data.json || readFromClipboard();

                const converted = JsonToTS(JSON.parse(json)).map(typeInterface => {
                    return typeInterface
                }).join('\n\n');

                console.log(`\n${converted}\n`);
                writeToClipboard(converted);

                success('Resulting interfaces copied to clipboard!');
            }
        }
    ],
};

