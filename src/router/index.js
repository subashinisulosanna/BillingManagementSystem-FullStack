import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../components/RegisterForm')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/LoginForm')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/HomeView')
  },
   {
    path: '/edituser',
    name: 'edituser',
    component: () => import('../components/EditUser')
    },
   {
    path: '/viewproduct',
    name: 'viewproduct',
    component: () => import('../components/ViewProduct')
    },
   {
    path: '/billing',
    name: 'billing',
    component: () => import('../components/BillingClass')
    },
   {
    path: '/deleteuser',
    name: 'deleteuser',
    component: () => import('../components/DeleteUser')
    },
    

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
