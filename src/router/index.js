import Vue from 'vue'
import VueRouter from 'vue-router'
import Category from '../views/Category'

const load = (component) => () => import(/* webpackChunkName: "[request]" */ `@/views/${component}.vue`)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'categories',
    component: Category
  },
  {
    path: '/people',
    name: 'people',
    component: load('People')
  },
  {
    path: '/search',
    name: 'search',
    component: load('Search')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
