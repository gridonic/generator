import { Router, RouterRoute } from '@/main/lib/router';
import Home from '@/views/Home.vue';

export default class AppRouter implements Router {
  public get routes(): RouterRoute[] {
    return [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      // {
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      // },
    ];
  }
}
