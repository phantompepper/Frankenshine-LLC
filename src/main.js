import Vue from 'vue'
import App from './App.vue'
import dotenv from 'dotenv'
import VueSweetAlert from 'vue-sweetalert2'

dotenv.config()


Vue.config.productionTip = false

Vue.use(VueSweetAlert);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')