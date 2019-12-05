const path = require('path');

const { info, error } = require('@gridonic/log');

module.exports = {
    name: 'Vue.js - Using Vue Cli 4',
    value: 'vue-legacy',
    onInstall: async (generator) => {
        const options = generator.options;
        const presetPath = path.join(__dirname, '../templates/vue/vue-cli-preset.json');

        info('Executing vue cli installer. This might take a while…', 1, 1);

        const result = generator.spawnCommandSync('vue', [
            'create', '--preset', presetPath, options.appname
        ]);

        if (result.status === 0) {
            info('Vue cli installer created project successfully!', 1, 1);
        } else {
            error(`Vue cli installer failed!\n`);
            throw new Error('Creating vue template failed');
        }
    }
};
