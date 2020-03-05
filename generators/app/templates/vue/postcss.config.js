const pkg = require('./package.json');

module.exports = (ctx) => ({
    plugins: {
        'postcss-lh': {},
        'postcss-normalize': {},
        'autoprefixer': {},
        'postcss-replace': { data: pkg },
        'cssnano': ctx.mode === 'production' ? {} : false
    }
});
