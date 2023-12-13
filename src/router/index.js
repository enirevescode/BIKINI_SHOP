import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import NotFound from '../views/NotFound.vue'
import Login from '../views/auth/LoginView.vue'
import { authGuard } from '../_helpers/auth-guard.js'

localStorage.setItem('token', 'marcel')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/login', name: 'Login', component: Login, beforeEnter: authGuard
    },
    // {
    //   path: '/pathMatch(.*)*', redirect: 'NotFound'
    // }
  ]
})

export default router
