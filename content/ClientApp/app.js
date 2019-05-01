import Vue from 'vue'
import axios from 'axios'
import router from './router/index.js'
// import RouterPrefetch from 'vue-router-prefetch'
import store from './store'
import { sync } from 'vuex-router-sync'
// import App from 'components/app-root.vue'
import App from './app.vue'
import { FontAwesomeIcon } from './icons'
import BlackDashboard from './plugins/blackDashboard.js'
import i18n from './i18n.js'

// Registration of global components
Vue.component('icon', FontAwesomeIcon)
// import './registerServiceWorker'

Vue.use(BlackDashboard)

Vue.prototype.$http = axios

sync(store, router)



const app = new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

export {
  app,
  router,
  store
}
