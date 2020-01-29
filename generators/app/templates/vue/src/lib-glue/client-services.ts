// Note: we import the client-services interfaces directly from the source, it is the only way
// webpack does not emit warnings pretending not to recognize the module import
import Vue from 'vue';
import VueI18n from 'vue-i18n';

import { Logger } from '@gridonic/client-services/src/core/logging/Logger';
import { ErrorTracker } from '@gridonic/client-services/src/tracking/error/ErrorTracker';
import { AjaxResponse, AjaxRequestConfig, AjaxClient } from '@gridonic/client-services/src/network/AjaxClient';

import { ComponentRelay, ComponentProvider, ComponentInfo } from '@gridonic/client-services/dist/vue/ComponentRelay';

import { Lazy, promise } from '@gridonic/client-services';

import { logger } from '@/lib-glue/logger';

import AppInfo from '@/AppInfo';

// Export interfaces
export {
  Logger, ErrorTracker, ComponentRelay, ComponentProvider, ComponentInfo,
  AjaxResponse, AjaxRequestConfig, AjaxClient, Lazy, promise,
};

export async function createErrorTracker(appInfo: AppInfo): Promise<ErrorTracker> {
  const { SentryErrorTracker } = (await import(/* webpackChunkName: "error-tracker" */ '@/lib-glue/client-services/sentry-error-tracker'));

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

export async function createComponentRelay(): Promise<ComponentRelay> {
  const { VueRelay } = (await import(/* webpackChunkName: "vue-relay" */ '@/lib-glue/client-services/vue-relay'));
  return new VueRelay(logger, Vue);
}

export async function createAjaxClient() {
  const { AxiosAjaxClient } = (await import(/* webpackChunkName: "ajax-client" */ '@/lib-glue/client-services/axios-ajax-client'));
  return new AxiosAjaxClient();
}
