import {
  StoreActionTree, StoreGetterTree, StoreModule, StoreMutationTree,
} from '@/main/lib/store';
import { AppState, RootState } from '@/store/store-state';

export default class AppStoreModule implements StoreModule<AppState, RootState> {
  namespaced = true;

  get state(): AppState {
    return {
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
