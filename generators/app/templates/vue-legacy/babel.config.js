module.exports = {
  presets: [

    // @see https://babeljs.io/docs/en/babel-preset-env
    ['@babel/preset-env', {

      // @see https://babeljs.io/docs/en/babel-preset-env#usebuiltins
      useBuiltIns: 'usage',

      // @see https://babeljs.io/docs/en/babel-preset-env#modules
      modules: false,

      // @see https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md#usebuiltins-usage-with-corejs-3
      corejs: 3,
    }]
  ],
  plugins: [

    // Can’t get it to work with Babel 7. It’s also planned to be included in the core.
    // That’s why we use generators for now.
    // @see https://github.com/babel/babel/pull/7076
    // @see https://github.com/MatAtBread/fast-async
    // 'module:fast-async'

    // @see https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread
    '@babel/plugin-proposal-object-rest-spread',

    // @see https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
    '@babel/plugin-syntax-dynamic-import',

    // @see https://babeljs.io/docs/en/babel-plugin-transform-runtime
    '@babel/plugin-transform-runtime',

    // @see https://babeljs.io/docs/en/babel-plugin-transform-async-to-generator
    '@babel/plugin-transform-async-to-generator'
  ]
};
