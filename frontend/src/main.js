import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'

import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Help from './views/Help.vue'
import Quest from './views/Quest.vue'

// router
Vue.use(VueRouter)
// routes
var router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/help', component: Help },
    { path: '/about', component: About },
    { path: '/quest', component: Quest },
    { path: '*', redirect: '/' }
  ]
})

// material
Vue.use(VueMaterial)
// theme
Vue.material.registerTheme({
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
