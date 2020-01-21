import { ComponentProvider } from '@/lib-glue/client-services';

import { AppContainer } from '@/container';

export default class AppComponentProvider implements ComponentProvider {
  private container: AppContainer;

  constructor(container: AppContainer) {
    this.container = container;
  }

  get componentInfos() {
    return [
      {
        selector: 'app-logo',
        component: () => import('@/components/AppLogo.vue'),
        args: this.defaultArgs,
      },
    ];
  }

  private get defaultArgs() {
    return {
      store: this.container.store,
      i18n: this.container.i18n,
    };
  }
}
