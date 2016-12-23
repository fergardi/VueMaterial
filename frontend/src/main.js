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
    { path: '/files', component: Files },
    { path: '*', redirect: '/' }
  ]
});

// material
Vue.use(VueMaterial)
// theme
Vue.material.registerTheme({
  default: {
    primary: 'purple',
    accent: 'deep-purple',
    warn: 'blue',
    background: 'white'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
