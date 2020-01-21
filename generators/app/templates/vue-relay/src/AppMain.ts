import './registerServiceWorker';

import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';

import {
  ComponentInfo, createComponentRelay,
  createErrorTracker,
  ErrorTracker,
  Lazy,
} from '@/lib-glue/client-services';

import { log } from '@/lib-glue/logger';
import AppInfo from '@/AppInfo';

import RootStore from '@/store/store';
import AppModule from '@/store/AppModule';

import AppComponentProvider from '@/AppComponentProvider';

import { AppContainer } from '@/container';

export default class AppMain {
  private container!: AppContainer;

  private errorTracker!: ErrorTracker;

  public async init() {
    Vue.config.productionTip = false;

    await this.startErrorTracking();
    await this.createServiceContainer();

    this.logAppStartupInfo();

    await this.loadComponents();
  }

  private async createServiceContainer() {
    this.container = {
      appInfo: this.appInfo,
      store: this.store,
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

  private logAppStartupInfo() {
    log.app.info(
      'Initialized', {
        environment: this.appInfo.appEnvironment,
        version: this.appInfo.appVersion,
        logLevel: this.appInfo.logLevel,
      },
    );
  }

  private async loadComponents() {
    const relay = await createComponentRelay();
    const provider = new AppComponentProvider(this.container);

    return provider.componentInfos.forEach((c: ComponentInfo) => {
      relay.parse(c);
    });
  }

  @Lazy() private get appInfo(): AppInfo {
    return new AppInfo();
  }

  @Lazy() private get store() {
    Vue.use(Vuex);

    const rootStore = new RootStore({
      app: new AppModule(this.appInfo),
    });

    return new Vuex.Store(rootStore);
  }

  @Lazy() private get i18n() {
    Vue.use(VueI18n);

    return new VueI18n({
      locale: 'en',
    });
  }
}
