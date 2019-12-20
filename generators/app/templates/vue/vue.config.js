const pkg = require('./package');

process.env.VUE_APP_VERSION = pkg.version;

module.exports = {
  lintOnSave: true,
  devServer: {
    host: 'localhost',
    https: {
      ca: process.env.SSL_CA || '/usr/local/etc/httpd/ssl/ca.pem',
      cert: process.env.SSL_CERT || '/usr/local/etc/httpd/ssl/server.crt',
      key: process.env.SSL_KEY || '/usr/local/etc/httpd/ssl/server.key',
    },
  },
};
