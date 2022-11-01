import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router' //what?//
import {routes} from './Routes' 

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes
})
new Vue({
  vuetify,
  render: h => h(App),
  router
}).$mount('#app')
