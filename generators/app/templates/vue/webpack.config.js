const { extendConfig } = require('@gridonic/webpack');

module.exports = extendConfig
    .usePreset('vue')
    .forAll({
        html: {
            template: './src/html/index.ejs'
        }
    })
    .toConfig;
