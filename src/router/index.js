import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Score from '@/components/Score'
import Scoreboard from '@/components/Scoreboard'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
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
})
