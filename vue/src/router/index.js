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
      path: '/busbus',
      name: 'Bus VS Bus',
      component: () => import('../views/BusBus.vue')
    },
    {
      path: '/traintrain',
      name: 'Train VS Train',
      component: () => import('../views/TrainTrain.vue')
    },
    {
      path: '/trainbus',
      name: 'Train VS Bus',
      component: () => import('../views/TrainBus.vue')
    },
    {
      path: '/',
      name: 'Favorites',
      component: () => import('../views/FavoriteStops.vue')
    }
  ]
})

export default router
