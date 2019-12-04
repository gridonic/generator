const path = require('path');
const util = require('util');
const { exec } = require('child_process');

const { info, error } = require('@gridonic/log');

const execAsync = util.promisify(exec);

module.exports = {
    name: 'Vue.js - Using Vue Cli 4',
    value: 'vue-legacy',
    onInstall: async (options) => {
        const presetPath = path.join(__dirname, '../templates/vue/vue-cli-preset.json');

        info('Executing vue cli installer. This might take a while…', 1, 1);

        try {
            await execAsync(`vue create --preset ${presetPath} ${options.appname}`);

            info('Vue cli installer created project successfully!', 1, 1);
        } catch (e) {
            error(`Vue cli installer failed!\n${e.stdout}`);

            throw new Error('Creating vue template failed');
        }
    }
};
