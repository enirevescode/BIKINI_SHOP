import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import NotFound from '../views/NotFound.vue'
import Login from '../views/auth/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/login', name: 'Login', component: Login, beforeEnter: (to) => {
        return true
      }
    },
    // {
    //   path: '/pathMatch(.*)*', redirect: 'NotFound'
    // }
  ]
})

export default router
