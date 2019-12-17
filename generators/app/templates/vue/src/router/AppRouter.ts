import { Router, RouterRoute } from '@/main/lib/router';
import Login from '@/views/Login.vue';

export default class AppRouter implements Router {
  public get routes(): RouterRoute[] {
    return [
      {
        path: '/',
        name: 'login',
        component: Login,
      },
      // {
      //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      // },
    ];
  }
}
