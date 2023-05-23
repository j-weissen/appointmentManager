import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';

import ShowCustomersView from "@/views/ShowCustomersView.vue";
import UpdateCustomerView from "@/views/UpdateCustomerView.vue";
import AddCustomerView from "@/views/AddCustomerView.vue";

import ShowAppointmentsView from "@/views/ShowAppointmentsView.vue";
import UpdateAppointmentView from "@/views/UpdateAppointmentView.vue";
import AddAppointmentView from "@/views/AddAppointmentView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/customers',
      name: 'customers',
      component: ShowCustomersView
    },
    {
      path: '/customers/add',
      name: 'customers_add',
      component: AddCustomerView,
    },
    {
      path: '/customers/:id',
      name: 'customers_update',
      component: UpdateCustomerView,
    },

    {
      path: '/appointments',
      name: 'appointments',
      component: ShowAppointmentsView,
    },
    {
      path: '/appointments/add',
      name: 'appointments_add',
      component: AddAppointmentView,
    },
    {
      path: '/appointments/:id',
      name: 'appointments_update',
      component: UpdateAppointmentView,
    },
  ]
})

export default router
