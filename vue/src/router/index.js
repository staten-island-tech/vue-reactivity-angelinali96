import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'About',
      component: HomeView
    },
    {
      path: '/',
      name: 'Favorites',
      component: () => import('../views/FavoriteStops.vue')
    },
    {
      path: '/compare',
      name: 'compare transit',
      component: () => import('../views/ComparePage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404 Error',
      component: () => import('../views/ErrorView.vue')
    }
  ]
})

export default router
