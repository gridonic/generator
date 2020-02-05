import './registerServiceWorker';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';

import App from '@/App.vue';

import AppInfo from '@/AppInfo';
import { log } from '@/lib-glue/logger';
import {
  createErrorTracker, ErrorTracker, Lazy,
} from '@/lib-glue/client-services';

import AppRouter from '@/router/AppRouter';
import RootStore from '@/store/store';
import AppModule from '@/store/AppModule';
import RouterModule from '@/store/RouterModule';

import { AppContainer } from '@/container';

export default class AppMain {
  private container!: AppContainer;

  private errorTracker!: ErrorTracker;

  public async init() {
    await this.startErrorTracking();
    await this.createServiceContainer();

    return this
      .createVueApp()
      .logAppStartupInfo();
  }

  private async createServiceContainer() {
    this.container = {
      appInfo: this.appInfo,
      store: this.store,
      router: this.router,
      i18n: this.i18n,
      errorTracker: this.errorTracker,
    };

    return this;
  }

  private async startErrorTracking() {
    this.errorTracker = await createErrorTracker(this.appInfo);
    this.errorTracker.start();

    return this;
  }


  private createVueApp() {
    Vue.config.productionTip = false;

    new Vue({
      router: this.router,
      store: this.store,
      i18n: this.i18n,
      render: h => h(App),
    }).$mount('#app');

    return this;
  }

  private logAppStartupInfo() {
    log.app.info(
      'Initialized', {
        environment: this.appInfo.appEnvironment,
        version: this.appInfo.appVersion,
        logLevel: this.appInfo.logLevel,
      },
    );
  }

  @Lazy() private get appInfo(): AppInfo {
    return new AppInfo();
  }

  @Lazy() private get store() {
    Vue.use(Vuex);

    const rootStore = new RootStore({
      app: new AppModule(this.appInfo),
      router: new RouterModule(this.router),
    });

    return new Vuex.Store(rootStore);
  }

  @Lazy() private get router() {
    Vue.use(VueRouter);

    return new VueRouter(new AppRouter());
  }

  @Lazy() private get i18n() {
    Vue.use(VueI18n);

    return new VueI18n({
      locale: 'en',
    });
  }
}
