import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BoardView from '@/views/BoardView'
import AboutView from '@/views/AboutView'
import QnaView from '@/views/QnaView'

import ListPost from '@/components/ListPost'
import RegistPost from '@/components/RegistPost'
import ModifyPost from '@/components/ModifyPost'

import QnaListPost from '@/components/QnaListPost'
import QnaRegistPost from '@/components/QnaRegistPost'
import QnaModifyPost from '@/components/QnaModifyPost'

Vue.use(VueRouter)

const routes = [
  { // 메인 페이지
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/board',
    name: 'board',
    component: BoardView,
    children: [
      { // 목록 조회
        path: '/',
        name: 'list',
        component: ListPost,
      },
      { // 글 등록
        path : '/regist',
        name : 'regist',
        component: RegistPost,
      },
      { // 글 수정
        path : '/modify/:no',
        name : 'modify',
        component : ModifyPost,
        props : true
      },
    ],
  },
  {
    path: '/Qna',
    name: 'Qna',
    component: QnaView,
    children: [
      { // 목록 조회
        path: '/',
        name: 'list',
        component: QnaListPost,
      },
      { // 글 등록
        path : '/QnaRegist',
        name : 'qnaRegist',
        component: QnaRegistPost,
      },
      { // 글 수정
        path : '/QnaModify/:no',
        name : 'Qnamodify',
        component : QnaModifyPost,
        props : true
      },
    ],
  },
  { // 팀원 소개
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
