import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Home from './views/Home.vue'
import Quest from './views/Quest.vue'

// router
Vue.use(VueRouter);
// routes
var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/quest', component: Quest },
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
