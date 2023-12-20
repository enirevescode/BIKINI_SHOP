import { createRouter, createWebHistory } from 'vue-router'
import * as Public from '@/views/public'
//import NotFound from '../views/NotFound.vue'
import LoginView from '../views/auth/LoginView.vue'
import { authGuard } from '../_helpers/auth-guard.js'

localStorage.setItem('token', 'marcel')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: Public.HomeView,
    },
    {
      path: '/collection', name: 'Collection', component: Public.Collection
    },
    {
      path: '/login', name: 'Login', component: LoginView, beforeEnter: authGuard
    },
    // {
    //   path: '/pathMatch(.*)*', redirect: 'NotFound'
    // }
  ]
})

export default router
