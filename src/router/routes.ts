import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/pages/LandingPage.vue'),
  },
  {
    path: '/chats',
    component: () => import('src/layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('src/pages/ChatroomsPage.vue'),
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('src/layouts/ChatLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: ':id',
        component: () => import('src/pages/ChatPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
