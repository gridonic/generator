module.exports = class {

    constructor(generator) {
        this.generator = generator;
    }

    require(module) {
        this.generator.console.command(`Composer require ${module}`);

        this.generator.spawnCommandSync('composer', ['require', module, '-o']);
    }

    install() {
        this.generator.console.command(`Composer install`);

        this.generator.spawnCommandSync('composer', ['install', '-o']);
    }
};
