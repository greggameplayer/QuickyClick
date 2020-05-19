<template>
  <div id="app">
    <router-view :player="player" v-on:score="updateScore" v-on:time="updateTime" :time="time"/>
    <router-view v-on:player="updatePlayer" v-on:playerName="updatePlayerName" v-on:playersArray="updatePlayers" :playerName="playerName" class="text-center" name="user"/>
    <router-view :score="score" :player="player" :time="time" class="text-center" name="score"/>
    <router-view :score="score" :playerName="playerName" :time="time" :playersArray="playersArray" name="scoreboard"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      score: 0,
      player: false,
      playerName: '',
      time: 10,
      playersArray: []
    }
  },
  methods: {
    updateScore: function (score) {
      this.score = score
    },
    updatePlayer: function () {
      this.player = true
    },
    updateTime: function (time) {
      this.time = time
    },
    updatePlayerName: function (name) {
      this.playerName = name
    },
    updatePlayers: function (array) {
      this.playersArray = array
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 85vh;
    display: block;
  }
</style>
