import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personality',
    name: 'Personality',
    component: () => import('../views/Personality.vue')
  },
  {
    path: '/results/:result',
    name: 'Results',
    component: () => import('../views/Result.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
