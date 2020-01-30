import dotenv from 'dotenv';
import fs from 'fs';

import Checker from './Checker';

export default class ProjectVerifier {
    constructor(rootDir, webpackConfig, pkg) {
        this.rootDir = rootDir;
        this.webpackConfig = webpackConfig;
        this.pkg = pkg;

        this.checker = new Checker();
        this.loadEnvFiles();

        this.loadChecks().forEach(c => this.checker.add(c));
    }

    loadChecks() {
        return [
            // .env file content checks
            {
                name: 'env.app_version',
                message: 'webpack does not generate env variable containing the app version',
                check: () => this.hasDefinePluginVariable('VUE_APP_VERSION'),
            },
            {
                name: 'env.project_name',
                message: 'webpack generates env variable containing the project name',
                check: () => this.hasDefinePluginVariable('VUE_APP_PROJECT_NAME'),
            },
            {
                name: 'env.app_environment.default',
                message: 'VUE_APP_ENVIRONMENT is not set to dev in .env',
                check: () => this.env.VUE_APP_ENVIRONMENT === 'dev',
            },
            {
                name: 'env.app_environment.stage',
                message: 'VUE_APP_ENVIRONMENT is not set to stage in .env.stage',
                check: () => this.envStage.VUE_APP_ENVIRONMENT === 'stage',
            },
            {
                name: 'env.app_environment.prod',
                message: 'VUE_APP_ENVIRONMENT is not set to prod in .env.prod',
                check: () => this.envProd.VUE_APP_ENVIRONMENT === 'prod',
            },
            {
                name: 'env.sentry_dsn.default',
                message: 'VUE_APP_SENTRY_DSN should not be set in .env',
                check: () => !(this.env.VUE_APP_SENTRY_DSN || '').length,
            },
            {
                name: 'env.sentry_dsn.stage',
                message: 'VUE_APP_SENTRY_DSN should be set in .env.stage',
                check: () => !!(this.envStage.VUE_APP_SENTRY_DSN || '').length,
            },
            {
                name: 'env.sentry_dsn.prod',
                message: 'VUE_APP_SENTRY_DSN should be set in .env.prod',
                check: () => !!(this.envProd.VUE_APP_SENTRY_DSN || '').length,
            },
            {
                name: 'env.log_level',
                message: 'VUE_APP_LOG_LEVEL must be OFF, TRACE, DEBUG, INFO, WARN or ERROR',
                check: () =>
                    ['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'].includes(this.env.VUE_APP_LOG_LEVEL) &&
                    ['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'].includes(this.envStage.VUE_APP_LOG_LEVEL) &&
                    ['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'].includes(this.envProd.VUE_APP_LOG_LEVEL)
                ,
            },
            {
                name: 'env.min_log_level.prod',
                message: 'VUE_APP_LOG_LEVEL should not be less than WARN in .env.prod',
                check: () => ['INFO', 'WARN', 'ERROR', 'OFF'].includes(this.envProd.VUE_APP_LOG_LEVEL),
            },

            // package.json content tests
            {
                name: 'pkg.gridonic',
                message: 'package.json is missing the "gridonic" section',
                check: () => !!this.pkg.gridonic,
            },
            {
                name: 'pkg.gridonic.api_token',
                message: 'package.json is missing "gridonic.apiToken". You can look it up here: -> https://git.gridonic.ch/gridonic/gridonic-api/issues/1',
                check: () => !!(this.pkg.gridonic || {}).apiToken,
            },
            {
                name: 'pkg.gridonic.generator',
                message: 'package.json is missing the "generator" section or the section is missing properties. Required properties are "kind", "projectId" and "version"',
                check: () => {
                    const generator = (this.pkg.gridonic || {}).generator || {};
                    return !!generator.kind && !!generator.projectId && !!generator.version;
                },
            },

            // local machine and project setup checks
            {
                name: 'env.sentry_dsn.local',
                message: 'VUE_APP_SENTRY_DSN should not be set in .env.local',
                check: () => !(this.envLocal.VUE_APP_SENTRY_DSN || '').length,
            },
            {
                name: 'local.ssl_certificates_available',
                message: 'ssl certificate must be available on your computer',
                check: () =>
                    fs.existsSync('/usr/local/etc/httpd/ssl/ca.pem') &&
                    fs.existsSync('/usr/local/etc/httpd/ssl/server.crt') &&
                    fs.existsSync('/usr/local/etc/httpd/ssl/server.key')
            },
        ];
    }

    loadEnvFiles() {
        this.env = this.loadEnvFile('.env').parsed;
        this.envStage = this.loadEnvFile('.env.stage').parsed;
        this.envProd = this.loadEnvFile('.env.prod').parsed;
        this.envLocal = this.loadEnvFile('.env.local').parsed || {};
    }

    disableCheck(name) {
        this.checker.disable(name);

        return this;
    }

    async run() {
        return this.checker.runAll();
    }

    hasDefinePluginVariable(name) {
        const definePlugin = this.webpackConfig.plugins
            .find((p) => p.constructor.name === 'DefinePlugin');

        return !!definePlugin.definitions['process.env'][name];
    }

    loadEnvFile(name) {
        return dotenv.config({
            path: `${this.rootDir}/${name}`,
        });
    }
}
