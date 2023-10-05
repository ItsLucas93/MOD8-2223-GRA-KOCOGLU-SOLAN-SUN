import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import ReservationPageView from '../views/ReservationPageView.vue'
import RoomItemPageView from "@/views/RoomItemPageView.vue";
import EquipmentPageView from '../views/EquipmentPageView.vue'
import AdminPanelView from '../views/AdminPanelView.vue'

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
      component: ReservationPageView
    },
    {
      path: '/rooms/:id',
      name: 'rooms',
      component: RoomItemPageView
    },
    {
      path: '/equipments',
      name: 'equipments',
      component: EquipmentPageView
    },
    {
      path: '/panel',
      name: 'panel',
      component: AdminPanelView
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
