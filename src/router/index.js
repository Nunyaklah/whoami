import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/results',
      name: 'Results',
      component: () => import('../views/Result.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: () => import('../views/signup.vue')
    }
  ]
})

export default router
