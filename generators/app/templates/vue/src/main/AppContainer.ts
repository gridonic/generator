import Vue from 'vue';

import {
  ErrorTracker,
  JsLogger,
  Lazy,
  Logger,
  LogLevel,
  SentryErrorTracker,
  Container,
} from '@/main/lib/client-services';
import AppInfo from '@/main/AppInfo';

export default class AppContainer implements Container {
  @Lazy()
  get log(): Logger {
    const logger = new JsLogger(LogLevel[this.appInfo.logLevel as keyof typeof LogLevel]);
    logger.createChannel('app');

    return logger;
  }

  @Lazy()
  get errorTracker(): ErrorTracker {
    return new SentryErrorTracker(
      this.log, {
        id: this.appInfo.sentryDsn,
        environment: this.appInfo.appEnvironment,
        vue: Vue,
      },
    );
  }

  @Lazy()
  get appInfo(): AppInfo {
    return new AppInfo();
  }
}
