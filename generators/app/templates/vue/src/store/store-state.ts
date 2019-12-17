/*
 * Define interfaces for the store states inhere:
 *
 * - State for the root store (RootState)
 * - State for each module (e.g., AppState)
 */

import AppInfo from '@/main/AppInfo';

export interface RootState {
  appInfo: AppInfo;
}

export interface AppState {
}
