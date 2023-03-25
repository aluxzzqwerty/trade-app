import { createRouter, createWebHistory } from 'vue-router'
import StockView from '../views/StockView.vue'
import DealsView from '../views/DealsView.vue'
import FavouritesView from '@/views/FavouritesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'header-menu__link--active',
  routes: [
    {
      path: '/',
      name: 'stock',
      component: StockView
    },
    {
      path: '/deals',
      name: 'deals',
      component: DealsView
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: FavouritesView
    }
  ]
})

export default router
