import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(firestorePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
