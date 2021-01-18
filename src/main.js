import Vue from 'vue'
import App from './App.vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

import store from "./store";

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
