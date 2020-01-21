import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';

import AppInfo from '@/AppInfo';
import { ErrorTracker } from '@/lib-glue/client-services';
import { AppStore } from '@/store/store';

export interface AppContainer {
  appInfo: AppInfo;
  store: AppStore,
  router: VueRouter;
  i18n: VueI18n,
  errorTracker: ErrorTracker;
}
