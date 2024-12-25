import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../App.vue'),
      children: [
        {
          path: '',
          component: ()=>import('../pages/home/homeIndex.vue')
        }
      ]
    },
    {
      path: '/base-dialog',
      component: () => import('../pages/baseDialog/Test.vue')
    },
    {
      path: '/base-progress',
      component: () => import('../pages/baseProgress/Test.vue')
    }
  ]
})

export default router
