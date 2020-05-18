<template>
  <div>
    <span :class="{ hide: !player }">{{ welcomeMessage }}</span>
    <form class="form-inline mt-3" v-on:submit.prevent="setPlayer" :class="{ hide: playerName }">
      <div class="input-group mb-2">
        <input class="form-control" name="player" placeholder="Entrer votre nom de joueur">
        <div class="input-group-append">
          <button class="btn btn-primary" type="submit">Jouer</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user',
  props: ['playerName'],
  data: function () {
    return {
      player: this.playerName,
      players: [],
      welcomeMessage: '',
      playerId: 0
    }
  },
  created: function () {
    if (localStorage.getItem('players') != null) {
      this.players = JSON.parse(localStorage.getItem('players'))
      this.playerId = this.players.length
    } else {
      localStorage.setItem('players', JSON.stringify(this.players))
    }
  },
  updated: function () {
    this.welcomeMessage = `Bonjour ${this.player} !`
  },
  methods: {
    setPlayer: function (event) {
      let playerName = event.target[0].value

      if (!playerName) {
        window.alert('Merci de renseigner votre nom')
        return
      }

      this.player = playerName
      this.$emit('player')
      this.$emit('playerName', playerName)

      for (let i = 0; i < this.players.length; i++) {
        if (playerName === this.players[i].name) {
          this.$emit('playersArray', this.players)
          return
        }
      }
      this.players.push({name: playerName, id: this.playerId, score: 0})
      this.$emit('playersArray', this.players)
      this.playerId++
    }
  }
}
</script>

<style scoped>
  .hide {
    display: none;
  }

  div > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
</style>
