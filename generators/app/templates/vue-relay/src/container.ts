import VueI18n from 'vue-i18n';

import AppInfo from '@/AppInfo';
import { ErrorTracker } from '@/lib-glue/client-services';
import { AppStore } from '@/store/store';

export interface AppContainer {
    appInfo: AppInfo;
    errorTracker: ErrorTracker;
    store: AppStore,
    i18n: VueI18n,
}
