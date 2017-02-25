import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from '../js/vue-material'
import VueLocalForage from 'vue-localforage'

import moment from 'moment'

import App from './App.vue'
import Info from './views/Info.vue'
import Achievement from './views/Achievement.vue'
import Help from './views/Help.vue'
import Splash from './views/Splash.vue'
import Quest from './views/Quest.vue'

// router
Vue.use(VueRouter)
// routes
var router = new VueRouter({
  routes: [
    { path: '/', redirect: '/splash' },
    { path: '/quest', component: Quest },
    { path: '/achievement', component: Achievement },
    { path: '/help', component: Help },
    { path: '/info', component: Info },
    { path: '/splash', component: Splash },
    { path: '*', redirect: '/splash' }
  ]
})

// material
Vue.use(VueMaterial)
Vue.material.registerTheme({
  // fallback
  default: {
    primary: 'black',
    background: 'black'
  },
  // achievements
  achievement: {
    primary: {
      color: 'red',
      hue: 600
    }
  },
  // help
  help: {
    primary: {
      color: 'green',
      hue: 600
    }
  },
  // info
  info: {
    primary: 'blue'
  },
  // quest
  quest: {
    primary: 'deep-purple',
    accent: 'green',
    warn: 'deep-purple'
  },
  // splash
  splash: {
    primary: 'white',
    background: 'black'
  },
  welcome: {
    primary: 'blue',
    background: 'blue'
  },
  mission: {
    primary: 'red',
    background: 'red'
  },
  search: {
    primary: 'green',
    background: 'green'
  },
  travel: {
    primary: 'indigo',
    background: 'indigo'
  },
  monster: {
    primary: 'deep-purple',
    background: 'deep-purple'
  },
  explore: {
    primary: 'grey',
    background: 'grey'
  },
  chest: {
    primary: 'pink',
    accent: 'indigo',
    background: 'pink'
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
