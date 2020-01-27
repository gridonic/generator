const pkg = require('./package');

process.env.VUE_APP_VERSION = pkg.version;
process.env.VUE_APP_PROJECT_NAME = pkg.name;

module.exports = {
    lintOnSave: true,
    pwa: {
        manifestOptions: {
            // Generally, a website with partial vue components is not a pwa and should not be installable
            // therefore we set the display mode to "browser"
            display: 'browser',
        },
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        disableHostCheck: true,
        https: {
            ca: process.env.SSL_CA || '/usr/local/etc/httpd/ssl/ca.pem',
            cert: process.env.SSL_CERT || '/usr/local/etc/httpd/ssl/server.crt',
            key: process.env.SSL_KEY || '/usr/local/etc/httpd/ssl/server.key',
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
        },
    },
    css: {
        sourceMap: true,
    },
    chainWebpack: (config) => {
        // https://medium.com/@mrodal/how-to-make-lazy-loading-actually-work-in-vue-cli-3-7f3f88cfb102
        config.plugins.delete('prefetch');
    },
};
