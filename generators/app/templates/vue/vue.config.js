const { GridonicApiWebpackPlugin } = require('@gridonic/client-services');

const pkg = require('./package');

process.env.VUE_APP_VERSION = pkg.version;
process.env.VUE_APP_PROJECT_NAME = pkg.name;

module.exports = {
  lintOnSave: true,
  pwa: {
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
      exclude: [/\.htaccess/],
    },
  },
  devServer: {
    host: 'localhost',
    https: {
      ca: process.env.SSL_CA || '/usr/local/etc/httpd/ssl/ca.pem',
      cert: process.env.SSL_CERT || '/usr/local/etc/httpd/ssl/server.crt',
      key: process.env.SSL_KEY || '/usr/local/etc/httpd/ssl/server.key',
    },
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "~@gridonic/components/styles";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    // https://medium.com/@mrodal/how-to-make-lazy-loading-actually-work-in-vue-cli-3-7f3f88cfb102
    config.plugins.delete('prefetch');

    // Enable Gridonic Api Plugin
    config
      .plugin('gridonic-api')
      .use(GridonicApiWebpackPlugin, [pkg]);
  },
};
