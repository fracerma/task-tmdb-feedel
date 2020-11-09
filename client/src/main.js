import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import New from './components/New.vue'
import Category from './components/Category.vue'
import CategoryMovies from './components/CategoryMovies.vue'
import Popular from './components/Popular.vue'
import Search from './components/Search.vue'
import MovieDetails from "./components/MovieDetails.vue"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin)
Vue.config.productionTip = false

const routes = [
  {path:'/', redirect: '/popular'}, //skipping the homepage
  {path:"/new",component:New},
  {path:"/category",component:Category},
  {path:"/category/:id",component:CategoryMovies},
  {path:"/popular",component:Popular},
  {path:"/search",component:Search},
  {path:"/movie/:id",component:MovieDetails}
]
const router = new VueRouter({
  routes 
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
