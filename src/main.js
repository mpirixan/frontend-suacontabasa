import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
Vue.config.productionTip = false

new Vue({
  Quasar,
  quasarUserOptions,
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(App, { router, Quasar, quasarUserOptions })
