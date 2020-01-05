import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from './plugins/vue-router.js'

Vue.config.productionTip = false

new Vue({
  router: VueRouter,
  render: h => h(App),
}).$mount('#app')
