import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CadastroPe from '../views/CadastroPessoas.vue'
import Busca from '../views/Busca.vue'
import CadastroCo from '../views/CadastroConta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CadastroPessoas',
    name: 'CadastroPE',
    component: CadastroPe
  },
  {
    path: '/busca',
    name: 'Busca',
    component: Busca
  },
  {
    path: '/CadastroConta',
    name: 'CadastroCO',
    component: CadastroCo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
