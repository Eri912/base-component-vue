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
      path: '/base-poster',
      meta: {
        head: {
          meta: [
            {
              name: "viewport",
              content: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
            }
          ]
        }
      },
      component: () => import('../pages/basePoster/PosterIndex.vue')
    }
  ]
})

export default router
