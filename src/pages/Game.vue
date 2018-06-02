<template>
<div class="game-wrapper">
  <div class="game">
    <row v-for="(val, rindex) in rowResults" :disabled="selectedRow !== rindex" :rowResult="val" :selectedColor="selectedColor" :key="rindex" :rowId="10-rindex" @finished="finishRow($event)" />
    <div class="selector"><field v-for="index in 6" :key="'color-' + index" :value="index" :active="index === selectedColor" :disabled="false"  @click.native="selectColor(index)"  /></div>
  </div>
</div>
</template>
<script>
import Row from '@/components/Game/Row'
import Field from '@/components/Game/Field'
import Vue from 'vue'
export default {
  components: { Row, Field },
  data () {
    return {
      selectedColor: 1,
      selectedRow: 9,
      randomCode: [-1, -1, -1],
      rowCount: 10,
      rowResults: [
        {result: false, first: 1},
        {result: false},
        {result: false},
        {result: false},
        {result: false},
        {result: false},
        {result: false},
        {result: false},
        {result: false},
        {result: false, last: 1}
      ]
    }
  },
  created () {
    this.setRandomCode()
  },
  methods: {
    selectColor (color) {
      this.selectedColor = color
    },
    finishRow (data) {
      let result = this.validateRow(data)
      Vue.set(this.rowResults[this.selectedRow], 'result', result)
      if (this.isWinner(result)) {
        this.$swal({
          title: 'Good job!',
          text: 'You won the game in ' + (10-this.selectedRow) + ' moves',
          type: 'success',
          showConfirmButton: false,
          backdrop: false
        })
        return
      }
      this.selectedRow--
      if (this.isLooser(result)) {
        this.$swal( {
          title: 'Oh dear..',
          text: 'You failed',
          type: 'error',
          showConfirmButton: false,
          backdrop: false
        })
        return
      }
    },
    setRandomCode () {
      for (let i = 0; i < 4; i++) {
        let number = this.getRandomInt(1, 6)
        Vue.set(this.randomCode, i, number)
      }
    },
    getRandomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    validateRow (row) {
      console.log(row)
      let correctFull = this.randomCode.slice(0)
      let correctMutable = this.randomCode.slice(0)
      let result = []
      row.forEach((e, i) => {
        let searchI = correctMutable.indexOf(e)
        if (searchI > -1) {
          correctMutable.splice(searchI, 1)
          if (e === correctFull[i]) {
            result.push(2)
            return
          }
          result.push(1)
        }
      })
      result.sort().reverse()
      return result
    },
    isWinner (result) {
      let winner = true
      if (result.length < 4) {
        return false;
      }
      result.forEach(element => {
        if (element !== 2) {
          winner = false
        }
      });
      return winner
    },
    isLooser (result) {
      if (this.isWinner(result)) {
        return false
      }
      if(this.selectedRow < 0) {
        return true
      }
      return false
    }
  }
}
</script>
<style lang="scss" scoped>
  .game-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .game {
    .selector {
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 4px;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .field {
        margin: 0px;
      }
    }
  }
</style>
