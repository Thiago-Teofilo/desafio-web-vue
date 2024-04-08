import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import UserView from '../views/UserView.vue';
import NotFoundView from '../views/NotFoundView.vue'
import RegisterView from '../views/RegisterView.vue'

export enum RouteNames {
  NOT_FOUND = 'NotFound',
  REGISTER = 'register',
  USER = 'user',
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: RouteNames.REGISTER,
    component: RegisterView
  },
  {
    path: '/:id',
    name: RouteNames.USER,
    component: UserView ,
    props: true,
  },
  {
    path: '/404/',
    name: RouteNames.NOT_FOUND,
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
