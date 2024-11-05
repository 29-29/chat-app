import { RouteRecordRaw } from 'vue-router';

import LandingPage from 'src/pages/LandingPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/chats',
    component: () => import('src/pages/IndexPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
