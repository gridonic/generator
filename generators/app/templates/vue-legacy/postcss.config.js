const pkg = require('./package.json');

module.exports = (ctx) => ({
    plugins: {
        'postcss-lh': {},
        'autoprefixer': {},
        'postcss-replace': { data: pkg },
        'cssnano': ctx.mode === 'production' ? {} : false
    }
});
