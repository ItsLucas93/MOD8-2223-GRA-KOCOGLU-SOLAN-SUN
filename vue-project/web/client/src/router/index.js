import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
// import ReservationPageView from '../views/ReservationPageView.vue'
// import RoomItemPageView from "@/views/RoomItemPageView.vue";
// import EquipmentPageView from '../views/EquipmentPageView.vue'
// import AdminPanelView from '../views/AdminPanelView.vue'

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
      // component: ReservationPageView
      component: () => import('../views/ReservationPageView.vue')
    },
    {
      path: '/rooms/:id',
      name: 'rooms',
      // component: RoomItemPageView
      component: () => import('../views/RoomItemPageView.vue')
    },
    {
      path: '/equipments',
      name: 'equipments',
      // component: EquipmentPageView
      component: () => import('../views/EquipmentPageView.vue')
    },
    {
      path: '/panel',
      name: 'panel',
      // component: AdminPanelView
      component: () => import('../views/AdminPanelView.vue')
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
