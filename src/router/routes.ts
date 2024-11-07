import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/pages/LandingPage.vue'),
  },
  {
    path: '/chats',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/ChatsPage.vue'),
      },
    ],
  },
  {
    path: '/chat',
    component: () => import('src/layouts/ChatLayout.vue'),
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
