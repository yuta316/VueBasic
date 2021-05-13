//ルータの設定ファイル 

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
//コンポーネントの読み込み
import BookList from '../views/BookList.vue'
import BookDetail from '../components/BookDetail.vue'
import Item from '../views/Item.vue'
import NotFound from '../components/NotFound.vue'
import User from '../views/User.vue'
import UserProfile from '../components/UserProfile.vue'
import UserPost from '../components/UserPost.vue'
import HomeSub from '../components/HomeSub.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      sub: HomeSub,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //遅延ローディング
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //pathの追加
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'Book',
    component: BookDetail,
    //propsの設定も行う
    props: (route)=>({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content,
    })
  },
  {
    path: '/item/:id',
    name: 'Item',
    component: Item,
  },
  {
    //ネストされたルートはnameを書くとエラーになる
    path: '/user',
    component: User,
    //ネストはchildrenで指定
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost,
      }
    ]
  },
  //404用
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
