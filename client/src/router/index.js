import { createRouter, createWebHistory } from 'vue-router';
// import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'Create New Employee',
    component: () => import('../components/create-employee/CreateEmployeeComponent.vue'),
  },
  {
    path: '/list-employees',
    name: 'List All Employees',
    component: () => import('../components/list-employee/ListEmployeeComponent.vue'),
  },
  {
    path: '/edit-employee/:id',
    name: 'Update Employee',
    component: () => import('../components/edit-employee/EditEmployeeComponent.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeResolve((to, next) => {
//   if (to.name) {
//     NProgress.start();
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   NProgress.done();
// });

export default router;
