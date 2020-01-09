import {
  Actions, Getters, Module, Mutations,
} from '@/store/store';

import AppInfo from '@/main/AppInfo';

export const namespace = 'app';

export interface AppState {
  info: AppInfo;
}

export default class AppModule implements Module<AppState> {
  private readonly appInfo: AppInfo;

  constructor(appInfo: AppInfo) {
    this.appInfo = appInfo;
  }

  public get namespaced() {
    return true;
  }

  public get state(): AppState {
    return {
      info: this.appInfo,
    };
  }

  public get getters(): Getters<AppState> {
    return {};
  }

  public get mutations(): Mutations<AppState> {
    return {};
  }

  public get actions(): Actions<AppState> {
    return {};
  }
}
