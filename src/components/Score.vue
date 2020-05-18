<template>
  <div>
    <div class="score" v-if="player">
      {{ score }}
    </div>
    <a v-if="finished" class="btn btn-primary mt-3" href="/">Relancer</a>
  </div>
</template>

<script>
export default {
  name: 'score',
  props: ['score', 'player', 'time'],
  data: function () {
    return {
      finished: false
    }
  },
  watch: {
    time: function () {
      if (!this.time || !this.player) {
        let self = this
        setTimeout(function () {
          self.finished = true
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
  .score {
    display: block;
    height: 50px;
    width: 105px;
    font-size: 19pt;
    font-weight: 600;
    color: greenyellow;
    background: #666;
    padding: 5px;
    line-height: 40px;
    margin: 0 auto;
  }
</style>
