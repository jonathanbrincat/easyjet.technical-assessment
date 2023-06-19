import { createRouter, createWebHistory } from 'vue-router'
import FizzBuzzView from '../views/FizzBuzzView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'fizz-buzz',
      component: FizzBuzzView,
      alias: '/fizz-buzz'
    },
    // {
    //   path: '/knights-tour',
    //   name: 'knights-tour',
    //   component: () => import('../views/KnightsTourView.vue'),
    // },
    {
      path: '/craps',
      name: 'craps',
      component: () => import('../views/CrapsView.vue'),
    },
  ]
})

export default router
