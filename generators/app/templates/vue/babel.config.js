module.exports = {
    presets: [

        // @see https://babeljs.io/docs/en/babel-preset-env
        ['@babel/preset-env', {

            // @see https://babeljs.io/docs/en/babel-preset-env#usebuiltins
            useBuiltIns: 'usage',

            // @see https://babeljs.io/docs/en/babel-preset-env#modules
            modules: false,

            // @see https://babeljs.io/docs/en/babel-preset-env#exclude
            exclude: [
                'transform-regenerator',
                'transform-async-to-generator'
            ]
        }]
    ],
    plugins: [
        // @see https://github.com/MatAtBread/fast-async
        'module:fast-async',

        // @see https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
        '@babel/plugin-proposal-object-rest-spread',

        // @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
        '@babel/plugin-syntax-dynamic-import'
    ]
};
