import VueRouter from 'vue-router';
import {
  Actions, Getters, Module, Mutations,
} from '@/store/store';

export const namespace = 'router';

export interface RouterState {
}

export default class RouterModule implements Module<RouterState> {
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

  public get getters(): Getters<RouterState> {
    return {};
  }

  public get mutations(): Mutations<RouterState> {
    return {};
  }

  public get actions(): Actions<RouterState> {
    const self = this;

    return {
      async push(args, name: string) {
        return self.router.push({ name });
      },
    };
  }
}
