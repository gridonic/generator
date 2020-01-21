// Note: we import the client-services interfaces directly from the source, it is the only way
// webpack does not emit warnings pretending not to recognize the module import
import Vue from 'vue';
import VueRouter from 'vue-router';

import { Logger } from '@gridonic/client-services/src/core/logging/Logger';

import { AjaxResponse, AjaxRequestConfig, AjaxClient } from '@gridonic/client-services/src/network/AjaxClient';
import { ErrorTracker } from '@gridonic/client-services/src/tracking/error/ErrorTracker';

import { logger } from '@/main/lib/logger';
import AppInfo from '@/main/AppInfo';
import { AppStore } from '@/store/store';

// Export interfaces
export {
  Logger, AjaxClient, AjaxResponse, AjaxRequestConfig, ErrorTracker,
};

export interface AppContainer {
  appInfo: AppInfo;
  store: AppStore,
  router: VueRouter;
  errorTracker: ErrorTracker;
}

export async function createErrorTracker(appInfo: AppInfo) {
  const { SentryErrorTracker } = (await import(/* webpackChunkName: "error-tracker" */ './lib/client-services/sentry-error-tracker'));

  return new SentryErrorTracker(
    logger, {
      id: appInfo.sentryDsn,
      environment: appInfo.appEnvironment,
      projectName: appInfo.projectName,
      version: appInfo.appVersion,
      vue: Vue,
    },
  );
}

export async function createAjaxClient() {
  const { AxiosAjaxClient } = (await import(/* webpackChunkName: "ajax-client" */ './lib/client-services/axios-ajax-client'));
  return new AxiosAjaxClient();
}
