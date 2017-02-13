import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import VueLocalForage from 'vue-localforage'

import moment from 'moment'

import App from './App.vue'
import Home from './views/Home.vue'
import Info from './views/Info.vue'
import Achievement from './views/Achievement.vue'
import Help from './views/Help.vue'
import Quest from './views/Quest.vue'

// router
Vue.use(VueRouter)
// routes
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/quest', component: Quest },
    { path: '/achievement', component: Achievement },
    { path: '/help', component: Help },
    { path: '/info', component: Info },
    { path: '*', redirect: '/' }
  ]
})

// material
Vue.use(VueMaterial)
Vue.material.registerTheme({
  default: {
    primary: 'blue-grey'
  },
  home: {
    primary: 'indigo'
  },
  achievement: {
    primary: {
      color: 'red',
      hue: 600
    }
  },
  help: {
    primary: {
      color: 'green',
      hue: 600
    }
  },
  info: {
    primary: 'blue'
  },
  quest: {
    primary: 'deep-purple',
    accent: 'green'
  }
})

// filter
Vue.filter('date', (timestamp) => {
  return moment(parseInt(timestamp)).format('D/M/YYYY HH:mm:ss')
})

// localstorage
Vue.use(VueLocalForage)

// scroll to top and close sidebar
router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    if (document.getElementById('scroll')) document.getElementById('scroll').scrollIntoView(true)
    Main.close()
    next()
  })
})

// main app
let Main = Vue.component('app', App)
Main = new Main({
  el: '#app',
  router
})
