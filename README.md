<p align="center">
    <img src="https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-horizontal.png" width="420" alt="Yeoman"><br><br>
    Our <strong>opinionated</strong> <a href="https://yeoman.io/">Yeoman</a> generator.
</p>
<br>

## Installation

It’s advised to install it globally. Just run `$ npm install --global @gridonic/generator`.

<br>

## How to use?

Since the generator exposes a set of commands and flags to our [@gridonic/cli](https://github.com/gridonic/cli) you can get an overview of all commands by running `$ gridonic` within your shell.

#  
<p align="center">
  <a href="https://gridonic.ch">gridonic.ch</a> ・
  <a href="https://gridonic.github.io">gridonic.github.io</a> ・
  <a href="https://twitter.com/gridonic">@gridonic</a>
</p>

## Publishing

When ready to release, execute the following steps, given that all changes are commited in the master branch:
- List changes in the CHANGELOG.md
- Bump your version and automatically create a git tag with `npm version <type>`, where type is patch, minor or major
- Push the master branch `git push` and the tags `git push --tags`
- Create a release in github. A github action will then automatically publish the package to npm


[@gridonic/cli]: https://github.com/gridonic/cli
