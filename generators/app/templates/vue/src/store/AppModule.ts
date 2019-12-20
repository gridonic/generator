import {
  StoreActionTree, StoreGetterTree, StoreModule, StoreMutationTree,
} from '@/main/lib/store';

import { AppState, RootState } from '@/store/store';

export default class AppModule implements StoreModule<AppState, RootState> {
  public get namespaced() {
    return true;
  }

  public get state(): AppState {
    return {};
  }

  public get getters(): StoreGetterTree<AppState, RootState> {
    return {};
  }

  public get mutations(): StoreMutationTree<AppState> {
    return {};
  }

  public get actions(): StoreActionTree<AppState, RootState> {
    return {};
  }
}
