import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory , createRouter } from 'vue-router'

import HomeView from './views/home.vue'
import AboutView from './views/search.vue'
import Buy from './views/buy.vue'
import home from './views/home.vue'
import Detail from './views/detail.vue'
import Order from './views/Order.vue'
import Comfirm from './views/Comfirm.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const routes = [
  { path: '/', component: HomeView },
  { path: '/search', component: AboutView },
  {path: '/buy',component :Buy },
  {path: '/home',component :home},
  {path: '/d',component :Detail},
  {path: '/or' ,component:Order },
  {path: '/co' ,component:Comfirm },

  
  
]

const vuetify = createVuetify({
  components,
  directives,
})

const router = createRouter({
  history: createWebHistory (),
  routes,
})
createApp(App).use(router).use(vuetify).mount('#app')
