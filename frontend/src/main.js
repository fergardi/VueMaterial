import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalForage from 'vue-localforage'

import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Achievement from './views/Achievement.vue'
import Help from './views/Help.vue'
import Quest from './views/Quest.vue'

// router
Vue.use(VueRouter)
// routes
var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/quest', component: Quest },
    { path: '/achievement', component: Achievement },
    { path: '/help', component: Help },
    { path: '/about', component: About },
    { path: '*', redirect: '/' }
  ]
})

// material
Vue.use(VueMaterial)
Vue.material.registerTheme({
  // views
  purple: {
    primary: 'purple'
  },
  orange: {
    primary: 'deep-orange'
  },
  green: {
    primary: 'teal'
  },
  blue: {
    primary: 'blue'
  },
  brown: {
    primary: 'brown'
  }
})

// localstorage
Vue.use(VueLocalForage)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
