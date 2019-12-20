import VueRouter from 'vue-router';

import {
  StoreActionTree, StoreGetterTree, StoreModule, StoreMutationTree,
} from '@/main/lib/store';

import { RootState, RouterState } from '@/store/store';

export default class RouterModule implements StoreModule<RouterState, RootState> {
  private router: VueRouter;

  constructor(router: VueRouter) {
    this.router = router;
  }

  public get namespaced() {
    return true;
  }

  public get state(): RouterState {
    return {};
  }

  public get getters(): StoreGetterTree<RouterState, RootState> {
    return {};
  }

  public get mutations(): StoreMutationTree<RouterState> {
    return {};
  }

  public get actions(): StoreActionTree<RouterState, RootState> {
    const self = this;

    return {
      async push({ commit }, name: string) {
        return self.router.push({ name });
      },
    };
  }
}
