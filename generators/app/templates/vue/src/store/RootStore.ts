import {
  StoreActionTree,
  StoreGetterTree,
  StoreModuleTree,
  StoreMutationTree,
  StoreRoot,
} from '@/main/lib/store';

import { AppState, RootState } from '@/store/store-state';

import AppStoreModule from '@/store/AppStoreModule';
import AppInfo from '@/main/AppInfo';

export default class RootStore implements StoreRoot<RootState> {
  private readonly appInfo: AppInfo;

  constructor({ appInfo }: { appInfo: AppInfo }) {
    this.appInfo = appInfo;
  }

  get modules(): StoreModuleTree<RootState> {
    return {
      app: new AppStoreModule(),
    };
  }

  get state(): RootState {
    return {
      appInfo: this.appInfo,
    };
  }

  get getters(): StoreGetterTree<AppState, RootState> {
    return {
    };
  }

  get actions(): StoreActionTree<AppState, RootState> {
    return {
    };
  }

  get mutations(): StoreMutationTree<AppState> {
    return {
    };
  }
}
