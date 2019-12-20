/**
 * Wraps the store interfaces, to keep the application and store model
 * clean from  vuex dependencies, as the store logic should be mostly independent from the
 * library implementation it is used by.
 */

import {
  StoreOptions as StoreRoot,
  Module as StoreModule,
  ModuleTree as StoreModuleTree,
  GetterTree as StoreGetterTree,
  ActionTree as StoreActionTree,
  MutationTree as StoreMutationTree,
  Store,
  Commit,
}
  from 'vuex';

export {
  Store,
  StoreRoot,
  StoreModule,
  StoreModuleTree,
  StoreGetterTree,
  StoreMutationTree,
  StoreActionTree,
  Commit,
};
