import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import './assets/styles/index.css';
import ("tailwindcss/tailwind.css");
import routes from './routes'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "history",
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
