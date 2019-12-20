import {
  StoreActionTree,
  StoreGetterTree,
  StoreModuleTree,
  StoreMutationTree,
  StoreRoot,
} from '@/main/lib/store';

import { AppState, RootState } from '@/store/store';

import AppInfo from '@/main/AppInfo';

export default class RootStore implements StoreRoot<RootState> {
  private readonly appInfo: AppInfo;

  private readonly storeModules: StoreModuleTree<RootState>;

  constructor({ appInfo, storeModules }
  : { appInfo: AppInfo, storeModules: StoreModuleTree<RootState> }) {
    this.appInfo = appInfo;
    this.storeModules = storeModules;
  }

  public get modules(): StoreModuleTree<RootState> {
    return this.storeModules;
  }

  public get state(): RootState {
    return {
      appInfo: this.appInfo,
    };
  }

  public get getters(): StoreGetterTree<AppState, RootState> {
    return {
    };
  }

  public get actions(): StoreActionTree<AppState, RootState> {
    return {
    };
  }

  public get mutations(): StoreMutationTree<AppState> {
    return {
    };
  }
}
