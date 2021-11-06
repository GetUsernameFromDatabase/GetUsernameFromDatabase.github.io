const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/badpage',
    name: 'Error404',
    component: () => import('../views/error/error404.vue'),
  },
];

routes.push({
  path: '*',
  name: 'NotFound',
  redirect: '/badpage',
});

export default routes;
