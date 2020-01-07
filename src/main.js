import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from './plugins/vue-router.js'
import Global from "./components/Global";

Vue.config.productionTip = false
Vue.prototype.Global = Global

new Vue({
  router: VueRouter,
  render: h => h(App),
}).$mount('#app')
