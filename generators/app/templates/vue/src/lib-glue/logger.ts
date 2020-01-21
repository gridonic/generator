/**
 * As an exception, we directly export the logger and the corresponding channels as a module.
 *
 * This is generally not encouraged for services, due to boundary and testability issues.
 * But as we want to be able to log everywhere without having to inject the logging objects, we
 * make the exception in this case.
 */

import { JsLogger, LogLevel } from '@gridonic/client-services';

import AppInfo from '@/AppInfo';

const appInfo = new AppInfo();
const logger = new JsLogger(LogLevel[appInfo.logLevel as keyof typeof LogLevel]);

const log = {
  default: logger,
  app: logger.createChannel('app'),
};

export {
  logger,
  log,
};
