import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fizz-buzz',
      name: 'fizz-buzz',
      component: () => import('../views/FizzBuzzView.vue')
    }
  ]
})

export default router
