import Vue from 'vue'
import VueRouter from 'vue-router'
import Busca from '../views/Busca.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/Cadastros',
    name: 'Cadastros',
    component: () => import('../views/Cadastros.vue')
  },
  {
    path: '/Busca',
    name: 'Busca',
    component: Busca
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
