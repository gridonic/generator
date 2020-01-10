# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<br>

Looking for [unreleased] changes?

<br>

## [2.0.1]
###### 2020-01-10

###### Fixed

- Include .gitignore files from templates in npm build


## [2.0.0]
###### 2020-01-10

###### Added

- Template for a library / npm package

###### Changed

- Update vue js template to use the new stack with vue-cli


## [1.0.1]
###### 2019-07-10

###### Added

- Stylelint since our webpack might use it

###### Changed

- Vue: Remove obsolete webpack options
- Babel: Improve async/await and potential codesize
- Hardcode versions to avoid unintended conflicts


## [1.0.0]
###### 2019-04-06

###### Changed

- Vue: Add `.gitignore`
- Vue: Add mandatory `corejs` option to `babel.config.js`
- Vue: Add default npm scripts
- Vue: `core-js` version should match babel config


## [0.1.3]
###### 2019-02-28

###### Fixed

- Vue: Some new configuration files have not been copied during scaffold
- Vue: Tweaked some import paths in `App.vue` (Always prefer `@`)


## [0.1.2]
###### 2019-02-27

###### Fixed

- Vue: Fixed incorrect htmlWebpackPlugin template path in `webpack.config.js`


## [0.1.1]
###### 2019-02-27

###### Fixed

- Vue: Adjust files to comply with [@gridonic/webpack@0.4.0](https://github.com/gridonic/webpack/blob/0.4.0/CHANGELOG.md)


## 0.1.0
###### 2019-02-18

First version ready for internal testing.

[unreleased]: https://github.com/gridonic/generator/compare/1.0.1...HEAD
[1.0.1]: https://github.com/gridonic/generator/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/gridonic/generator/compare/0.1.3...1.0.0
[0.1.3]: https://github.com/gridonic/generator/compare/0.1.2...0.1.3
[0.1.2]: https://github.com/gridonic/generator/compare/0.1.1...0.1.2
[0.1.1]: https://github.com/gridonic/generator/compare/0.1.0...0.1.1
