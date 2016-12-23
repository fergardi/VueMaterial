import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Files from './views/Files.vue'

// router
Vue.use(VueRouter);
// routes
var router = new VueRouter({
  routes: [
    { path: '/', component: Files },
    { path: '*', redirect: '/' }
  ]
});

// material
Vue.use(VueMaterial)
// theme
Vue.material.registerTheme({
  default: {
    primary: 'purple',
    accent: 'red'
  },
  green: {
    primary: 'green',
    accent: 'pink'
  },
  orange: {
    primary: 'green',
    accent: 'green'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
