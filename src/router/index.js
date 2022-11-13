import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView'
import ListPost from '../components/ListPost'
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
    path: '/board',
    name: 'board',
    component: BoardView,
    children: [
      {
        path: '/',
        name: 'list',
        component: ListPost,
      },
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
