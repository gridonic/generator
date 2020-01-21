import { Router, RouterRoute } from '@/lib-glue/router';
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
