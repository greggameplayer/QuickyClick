<template>
    <div v-if="finished" class="scoreboard mt-5">
      <h1 class="text-center display-4">Scoreboard</h1>
      <div id="scoreboardcontainer" class="text-center">
        <div class="btn-group-vertical">
            <button class="btn btn-primary" @click="onClickLocal" :class="{active: btclicked === 0}">Local</button>
            <button class="btn btn-primary" @click="onClickOnline" :class="{active: btclicked === 1}">Online</button>
        </div>
        <table class="table" v-if="btclicked === 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Player</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in playersArray" :key="item.id">
              <th scope="row" :class="{gold: item.rank === 1, silver: item.rank === 2, bronze: item.rank === 3}">{{ item.rank }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.score }}</td>
            </tr>
          </tbody>
        </table>
        <table class="table" v-if="btclicked === 1">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Player</th>
            <th scope="col">Score</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in onlineScores" :key="item.id">
            <th scope="row" :class="{gold: item.rank === 1, silver: item.rank === 2, bronze: item.rank === 3}">{{ item.rank }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
import { db } from '../db'

export default {
  name: 'Scoreboard',
  data: function () {
    return {
      finished: false,
      btclicked: 0,
      onlineScores: [],
      LocalRank: 1,
      OnlineRank: 1
    }
  },
  firestore: {
    onlineScores: db.collection('onlineScores')
  },
  props: ['playerName', 'score', 'time', 'playersArray'],
  watch: {
    time: async function () {
      if (!this.time) {
        const self = this
        setTimeout(async function () {
          for (let i = 0; i < self.playersArray.length; i++) {
            if (self.playerName === self.playersArray[i].name) {
              if (self.score > self.playersArray[i].score) {
                self.playersArray[i].score = self.score
              }
              localStorage.setItem('players', JSON.stringify(self.playersArray))
              await db.collection('onlineScores').doc(self.playerName).set({
                name: self.playersArray[i].name,
                score: self.playersArray[i].score
              }).then(() => {
                console.log('user updated!')
              })
            }
          }
          self.playersArray.sort(function (a, b) {
            return b.score - a.score
          })

          for (let i = 0; i < self.playersArray.length; i++) {
            if (typeof self.playersArray[i + 1] !== 'undefined') {
              if (self.playersArray[i].score === self.playersArray[i + 1].score) {
                Object.assign(self.playersArray[i], { rank: self.LocalRank })
                Object.assign(self.playersArray[i + 1], { rank: self.LocalRank })
              } else {
                Object.assign(self.playersArray[i], { rank: self.LocalRank })
                self.LocalRank++
                Object.assign(self.playersArray[i + 1], { rank: self.LocalRank })
              }
            } else {
              if (self.playersArray[i] === self.playersArray[0]) {
                Object.assign(self.playersArray[i], { rank: self.LocalRank })
              }
            }
          }

          self.finished = true
          self.onlineScores.sort(function (a, b) {
            return b.score - a.score
          })

          for (let i = 0; i < self.onlineScores.length; i++) {
            if (typeof self.onlineScores[i + 1] !== 'undefined') {
              if (self.onlineScores[i].score === self.onlineScores[i + 1].score) {
                Object.assign(self.onlineScores[i], { rank: self.OnlineRank })
                Object.assign(self.onlineScores[i + 1], { rank: self.OnlineRank })
              } else {
                Object.assign(self.onlineScores[i], { rank: self.OnlineRank })
                self.OnlineRank++
                Object.assign(self.onlineScores[i + 1], { rank: self.OnlineRank })
              }
            } else {
              if (self.onlineScores[i] === self.onlineScores[0]) {
                Object.assign(self.onlineScores[i], { rank: self.OnlineRank })
              }
            }
          }
        }, 1000)
      }
    }
  },
  methods: {
    onClickLocal: function () {
      this.btclicked = 0
    },
    onClickOnline: function () {
      this.btclicked = 1
    }
  }
}
</script>

<style scoped>
  .table
  {
    width: 50vw;
    align-self: center;
    border-left: solid whitesmoke 2px;
    border-right: solid whitesmoke 2px;
    border-bottom: solid whitesmoke 2px;
  }

  .scoreboard
  {
    display: flex;
    flex-direction: column;
    width: 100vw;
  }

  #scoreboardcontainer
  {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  .btn-group-vertical {
    max-width: 30%;
    height: 5%;
  }

  .bronze {
    color: saddlebrown;
  }

  .silver {
    color: silver;
  }

  .gold {
    color: gold;
  }
</style>
