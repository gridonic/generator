import { AppState } from '@/store/AppModule';
import { RouterState } from '@/store/RouterModule';

/**
 * Augment RootState with the state of the submodules to allow type inferral in components
 */
declare module '@/store/store' {
  export interface RootState {
    app: AppState;
    router: RouterState;
  }
}
