const { extendConfig } = require('@gridonic/webpack');

module.exports = extendConfig
    .usePreset('vue')
    .forAll({
        html: {
            template: './src/index.ejs'
        }
    })
    .toConfig;
