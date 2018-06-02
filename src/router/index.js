import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Game from '@/pages/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})
