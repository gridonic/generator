import dotenv, { DotenvParseOutput } from 'dotenv';
import fs from 'fs';

// @ts-ignore
import webpackConfig from '@vue/cli-service/webpack.config';

class TestContext {
  public env!: DotenvParseOutput;
  public envStage!: DotenvParseOutput;
  public envProd!: DotenvParseOutput;
  public envLocal!: DotenvParseOutput;

  public loadEnvFiles() {
    this.env = this.loadEnvFile('.env').parsed!;
    this.envStage = this.loadEnvFile('.env.stage').parsed!;
    this.envProd = this.loadEnvFile('.env.prod').parsed!;
    this.envLocal = this.loadEnvFile('.env.local').parsed || {};
  }

  private loadEnvFile(name: string) {
    return dotenv.config({
      path: `${__dirname}/../../../${name}`,
    });
  }
}

const ctx = new TestContext();
ctx.loadEnvFiles();

describe('Verify the projects configuration', () => {
  describe('Webpack configuration', () => {
    test('webpack generates env variable containing the app version', () => {
      // console.log(webpackConfig.plugins[1]);
      const definePlugin = webpackConfig.plugins
        .find((p: any) => p.constructor.name === 'DefinePlugin');

      expect(definePlugin.definitions['process.env'].VUE_APP_VERSION)
        .not.toBeFalsy();
    });
  });

  describe('.env files and variables', () => {
    describe('Environment', () => {
      test('environment should be "dev" in default .env', () => {
        expect(ctx.env.VUE_APP_ENVIRONMENT)
          .toEqual('dev');
      });

      test('environment should be "stage" in stage .env.stage', () => {
        expect(ctx.envStage.VUE_APP_ENVIRONMENT)
          .toEqual('stage');
      });

      test('environment should be "prod" in prod .env.prod', () => {
        expect(ctx.envProd.VUE_APP_ENVIRONMENT)
          .toEqual('prod');
      });
    });

    describe('Sentry Error Tracking', () => {
      test('sentry id should not be set in default .env', () => {
        expect(ctx.env.VUE_APP_SENTRY_DSN)
          .toEqual('');
      });

      test('sentry id must be set in .env.stage', () => {
        expect(ctx.envStage.VUE_APP_SENTRY_DSN)
          .not.toBeFalsy();
      });

      test('sentry id must be set in .env.prod', () => {
        expect(ctx.envProd.VUE_APP_SENTRY_DSN)
          .not.toBeFalsy();
      });

      test('sentry id from .env.stage must match the sentry id from .env.prod', () => {
        expect(ctx.envStage.VUE_APP_SENTRY_DSN)
          .toEqual(ctx.envProd.VUE_APP_SENTRY_DSN);
      });
    });

    describe('Logging', () => {
      test('log level must be OFF, TRACE, DEBUG, INFO, WARN or ERROR', () => {
        expect(['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'])
          .toContainEqual(ctx.env.VUE_APP_LOG_LEVEL);

        expect(['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'])
          .toContainEqual(ctx.envStage.VUE_APP_LOG_LEVEL);

        expect(['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'])
          .toContainEqual(ctx.envProd.VUE_APP_LOG_LEVEL);

        if (ctx.envLocal.VUE_APP_LOG_LEVEL) {
          expect(['OFF', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR'])
            .toContainEqual(ctx.envLocal.VUE_APP_LOG_LEVEL);
        }
      });

      test('log level should not be less than WARN in .env.prod', () => {
        expect(['INFO', 'WARN', 'ERROR', 'OFF'])
          .toContainEqual(ctx.envProd.VUE_APP_LOG_LEVEL);
      });
    });
  });

  describe('Local Project Setup and Configuration', () => {
    test('sentry id should not be set in local .env.local', () => {
      expect(ctx.envLocal.VUE_APP_SENTRY_DSN)
        .toBeFalsy();
    });

    test('ssl certificate must be available', () => {
      expect(fs.existsSync('/usr/local/etc/httpd/ssl/ca.pem'))
        .toBeTruthy();

      expect(fs.existsSync('/usr/local/etc/httpd/ssl/server.crt'))
        .toBeTruthy();

      expect(fs.existsSync('/usr/local/etc/httpd/ssl/server.key'))
        .toBeTruthy();
    });
  });
});
