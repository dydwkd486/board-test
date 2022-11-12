import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistPost from '../components/RegistPost'
import ModifyPost from '../components/ModifyPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [
        {
          path : '/regist',
          name : 'regist',
          component: RegistPost,
        },
        {
          path : '/modify/:no',
          name : 'modify',
          component : ModifyPost,
          props : true
        },
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
