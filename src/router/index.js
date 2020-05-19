import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/components/Game'
import Score from '@/components/Score'
import Scoreboard from '@/components/Scoreboard'
import User from '@/components/User'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Game,
      score: Score,
      user: User,
      scoreboard: Scoreboard
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
