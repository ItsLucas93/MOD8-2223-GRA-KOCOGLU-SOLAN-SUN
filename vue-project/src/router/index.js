import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import ReservationVue from '../views/ReservationView.vue'
import RoomView from '../views/RoomView.vue'
import EquipmentPageView from '../views/EquipmentPageView.vue'
import panel from '../views/AdminPanelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePageView
    },
    {
      path: '/reservation',
      name: 'reservation',
      component: ReservationVue
    },
    {
      path: '/rooms/:id',
      name: 'rooms',
      component: RoomView
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: EquipmentPageView
    },
    {
      path: '/panel',
      name: 'panel',
      component: panel
    },
    {
      path: '/rooms',
      name: 'rooms-page',
      component: () => import('../views/RoomPageView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPageView.vue')
    }
  ]
})

export default router
