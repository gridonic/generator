import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex, { Store } from 'vuex';

import {
  ErrorTracker,
  Lazy,
  SentryErrorTracker,
  Container,
} from '@/main/lib/client-services';

import { logger } from '@/main/lib/logger';

import AppInfo from '@/main/AppInfo';
import AppModule from '@/store/AppModule';
import AppRouter from '@/router/AppRouter';
import RouterModule from '@/store/RouterModule';

import RootStore from '@/store/RootStore';
import { RootState } from '@/store/store';

export default class AppContainer implements Container {
  @Lazy() public get appInfo(): AppInfo {
    return new AppInfo();
  }

  @Lazy() public get errorTracker(): ErrorTracker {
    return new SentryErrorTracker(
      logger, {
        id: this.appInfo.sentryDsn,
        environment: this.appInfo.appEnvironment,
        projectName: this.appInfo.projectName,
        version: this.appInfo.appVersion,
        vue: Vue,
      },
    );
  }

  @Lazy() public get store(): Store<RootState> {
    return new Vuex.Store(this.rootStore);
  }

  @Lazy() public get rootStore(): RootStore {
    return new RootStore({
      appInfo: this.appInfo,
      storeModules: {
        app: new AppModule(),
        router: new RouterModule(this.router),
      },
    });
  }

  @Lazy() public get router(): VueRouter {
    return new VueRouter(new AppRouter());
  }
}
