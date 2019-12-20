import './registerServiceWorker';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import App from './App.vue';

import AppContainer from '@/main/AppContainer';
import AppInfo from '@/main/AppInfo';
import { log } from '@/main/lib/logger';

export default class AppMain {
  private container!: AppContainer;

  public init() {
    return this
      .createServiceContainer()
      .startErrorTracking()
      .createVueApp()
      .logAppStartupInfo();
  }

  private createServiceContainer() {
    this.container = new AppContainer();

    return this;
  }

  private startErrorTracking() {
    this.container.errorTracker.start();

    return this;
  }

  private createVueApp() {
    Vue.config.productionTip = false;

    new Vue({
      router: this.createRouter(),
      store: this.createStore(),
      render: h => h(App),
    }).$mount('#app');

    return this;
  }

  private createRouter() {
    Vue.use(VueRouter);

    return this.container.router;
  }

  private createStore() {
    Vue.use(Vuex);

    return this.container.store;
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

  private get appInfo(): AppInfo {
    return this.container.appInfo;
  }
}
