
require('material-design-lite')
import VueMdl from 'vue-mdl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// page components
import App from './App'
import Accounts from './components/Accounts'
import Home from './components/Home'
import Login from './components/Login'

Vue.use(VueMdl)
Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter()

router.map({
  '/login': {
    component: Login
  },
  '/home': {
    component: Home
  },
  '/accounts': {
    component: Accounts
  }
})

// import Mdl from 'vue-mdl'

router.redirect({
  '*': '/home'
})

router.afterEach(transition => {
  console.log(transition, componentHandler)
})

router.start(App, '#app')
