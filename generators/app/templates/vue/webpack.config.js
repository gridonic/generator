const {
    development,
    production
} = require('@gridonic/webpack');

module.exports = (env) => {
    const config = env === 'production' ? production : development;

    return config({
        html: {
            template: './src/html/index.ejs',
        },
        presets: ['vue']
    });
};
