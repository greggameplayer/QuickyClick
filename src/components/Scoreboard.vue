<template>
    <div v-if="finished" class="scoreboard mt-5">
      <h1 class="text-center display-4">Scoreboard</h1>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Player</th>
          <th scope="col">Score</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in playersArray" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.score }}</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Scoreboard',
  data: function () {
    return {
      finished: false
    }
  },
  props: ['playerName', 'score', 'time', 'playersArray'],
  watch: {
    time: function () {
      if (!this.time) {
        let self = this
        let modifyScore = false
        setTimeout(function () {
          for (let i = 0; i < self.playersArray.length; i++) {
            if (self.playerName === self.playersArray[i].name) {
              self.playersArray[i].score = self.score
              localStorage.setItem('players', JSON.stringify(self.playersArray))
              modifyScore = true
            }
          }

          if (modifyScore === false) {
            self.playersArray[this.playersArray.length - 1].score = self.score
            localStorage.setItem('players', JSON.stringify(self.playersArray))
          }
          self.playersArray.sort(function (a, b) {
            return b.score - a.score
          })
          self.finished = true
        }, 1000)
      }
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
</style>
