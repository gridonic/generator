/*
 * Define interfaces for the store states inhere:
 *
 * - State for the root store (RootState)
 * - State for each module (e.g., AppState)
 */

import { namespace } from 'vuex-class';
import AppInfo from '@/main/AppInfo';

// States
// Define the interfaces for all states here

export interface RootState {
  appInfo: AppInfo;

  // Modules states are accessible via Root State
  app?: AppState;
  router?: RouterState;
}

export interface AppState {
}

export interface RouterState {
}

/**
 * Used in vue components for vuex decorators
 */
export const App = namespace('app');
