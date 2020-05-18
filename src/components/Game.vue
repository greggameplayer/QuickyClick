<template>
  <div class="content">
    <div class="game" @click="clickOnInterface" :class="{wait: !player || stopped}">
      <span class="time" v-if="!stopped">{{ gameTime }}</span>
      <span v-if="player && !stopped" class="round" :style="roundStyle" :class="{bonus: bonusActivated, badColor: badColorActivated}" @click.stop="clickOnRound" @click.alt.stop="bonus"></span>
    </div>
    <div class="log text-center">
      <p :key="item.id" v-for="item in userLogs">
        {{ item.message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  props: ['player', 'time'],
  data: function () {
    return {
      click: 0,
      gameTime: this.time,
      roundStyle: {
        height: '5vh',
        width: '5vh',
        margin: '20vh 20vw'
      },
      bonusActivated: false,
      badColorActivated: false,
      collection: [],
      stopped: true
    }
  },
  created: function () {
    document.onkeydown = this.start
  },
  watch: {
    click: function () {
      this.updateRound()
      this.$emit('score', this.click)
    },
    player: function () {
      this.stopped = false
      let self = this

      setInterval(function () {
        self.updateTime()
      }, 1000)
    }
  },
  computed: {
    userLogs: function () {
      return this.collection.filter(function (item) {
        return item.type === 'user'
      })
    }
  },
  methods: {
    clickOnRound: function (event) {
      setTimeout(this.updateRound, 1000)

      this.updateClick(1)
      this.addLog(`BRAVO !`)
    },
    updateTime: function () {
      if (this.gameTime === 0) {
        this.stopped = true
      }

      if (!this.stopped) {
        this.gameTime--
        this.$emit('time', this.gameTime)
      }
    },
    bonus: function (event) {
      if (this.bonusActivated) {
        this.updateClick(1)
        this.addLog(`PERFECT +2`)
      } else {
        this.updateClick()
        this.addLog(`?? -1`)
      }
    },
    start: function (event) {
      if (event.key === 'Enter') {
        console.log('start')
      }
    },
    clickOnInterface: function (event) {
      this.updateClick()
      this.addLog(`Oh Non -1`)
    },
    updateClick: function (increment) {
      if (!this.player || this.stopped) {
        return
      }

      if (increment) {
        this.click++
      } else {
        this.click--
      }
    },
    updateRound: function () {
      let size = Math.random() * (10 - 5) + 5
      let top = Math.random() * (40 - 5) + 5
      let left = Math.random() * (90 - 5) + 5

      this.badColorActivated = size < 5
      this.bonusActivated = size > 8

      this.addLog({
        size: size,
        top: top,
        left: left
      }, 'round')

      this.roundStyle.height = this.roundStyle.width = `${size}vh`
      this.roundStyle.margin = `${top}vh ${left}vw`
    },
    addLog: function (message, type) {
      if (!this.player || this.stopped) {
        return
      }

      let typeOfMessage = type || 'user'
      this.collection.unshift({id: this.collection.length / 2, message: message, type: typeOfMessage})
    }
  }
}
</script>

<style scoped>
  .game {
    width: 100%;
    height: 50vh;
    display: block;
    background: #000000;
    opacity: 1;
    transition: opacity 1s;
  }

  .round {
    background: aliceblue;
    border-radius: 9999px;
    position: absolute;
    transition: width 2s, height 2s, margin 0.5s;
  }

  .bonus {
    background: indianred;
  }

  .badColor {
    background: #090f0f;
  }

  .content {
    height: 55vh;
  }

  .log {
    width: 100%;
    height: 5vh;
    background: #666;
    display: block;
    overflow: hidden;
    line-height: 5vh;
  }

  .wait {
    opacity: 0.3;
  }

  .time {
    position: absolute;
    font-size: 90pt;
    padding-left: 30px;
    color: darkgoldenrod;
    opacity: 0.2;
  }
</style>
