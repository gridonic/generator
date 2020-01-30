// @ts-ignore
import ProjectVerifier from '@gridonic/generator/src/test/ProjectVerifier';

// @ts-ignore
import webpackConfig from '@vue/cli-service/webpack.config';

import pkg from '../../../package.json';

describe('Verify the projects configuration', () => {
  test('run configuration checks', async () => {
    const verifier = new ProjectVerifier(
      `${__dirname}/../../..`,
      webpackConfig,
      pkg,
    );

    // You can disable checks by using disableCheck and passing the check name.
    // E.g., for disabling the necessity of a sentry dsn on stage, use the following line:
    // verifier.disableCheck('env.sentry_dsn.stage');

    await verifier.run();
  });
});
