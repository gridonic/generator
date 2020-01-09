import {
  Module as StoreModule,
  GetterTree as StoreGetterTree,
  Store,
  MutationTree, ActionTree, StoreOptions, ModuleTree, DispatchOptions, Payload, CommitOptions,
}
  from 'vuex';

export { Store } from 'vuex';

export interface Dispatch {
  (type: string, payload?: any, options?: DispatchOptions): Promise<any>;
  <P extends Payload>(payloadWithType: P, options?: DispatchOptions): Promise<any>;
}

export interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export interface RootState {
}

export interface Module<TState> extends StoreModule<TState, RootState> {
}

export interface Getters<TState> extends StoreGetterTree<TState, RootState> {
}

export interface Mutations<TState> extends MutationTree<TState> {
}

export interface Actions<TState> extends ActionTree<TState, RootState> {
}

export default class RootStore implements StoreOptions<RootState> {
  private readonly storeModules: ModuleTree<RootState>;

  constructor(storeModules: ModuleTree<RootState>) {
    this.storeModules = storeModules;
  }

  public get modules(): ModuleTree<RootState> {
    return this.storeModules;
  }
}
