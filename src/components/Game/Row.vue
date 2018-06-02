<template>
<div class="game-row">
  <div :class="{
    rowId: true,
    rowActive: !disabled
    }">
    {{rowId}}
  </div>
   <div key="fields">
     <field :disabled="disabled" v-for="(field, index) in localRowData" :value="field" :key="index" @click.native="setColor(index)" />
    </div>
    <div class="rowEvaluator">
      <evaluator :result="rowResult" v-if="disabled" />
      <at-button type="success" icon="icon-check" v-if="!disabled" :disabled="!valid" @click.native="$emit('finished', localRowData)" circle></at-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Field from '@/components/Game/Field'
import Evaluator from '@/components/Game/Evaluator'
import Velocity from 'velocity-animate'
export default {
  components: { Field, Evaluator },
  props: {
    rowId: {
      type: Number,
      default: -1
    },
    disabled: {
      type: Boolean,
      default: true
    },
    selectedColor: {
      type: Number,
      default: -1
    },
    rowResult: {
      type: [Object, Boolean],
      default: false
    }
  },
  data () {
    return {
      localRowData: []
    }
  },
  created () {
    if (this.localRowData.length <= 0) {
      this.localRowData.push(-1)
      this.localRowData.push(-1)
      this.localRowData.push(-1)
      this.localRowData.push(-1)
    }
  },
  computed: {
    valid () {
      let valid = true
      this.localRowData.forEach(element => {
        if (element < 0) {
          valid = false
        }
      })
      return valid
    }
  },
  methods: {
    setColor (index) {
      if (!this.disabled) {
        Vue.set(this.localRowData, index, this.selectedColor)
      }
    },
    beforeEnter: function (el) {
      el.style.opacity = 0
    },
    enter: function (el, done) {
      var delay = 680
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 1 },
          { duration: 300,
            complete: done }
        )
      }, delay)
    },
    leave: function (el, done) {
      var delay = 0
      setTimeout(function () {
        Velocity(
          el,
          { opacity: 0 },
          { duration: 300,
            complete: done }
        )
      }, delay)
    }
  }
}
</script>
<style lang="scss" scoped>
.game-row{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: nowrap;
}
.rowId {
  position: relative;
  display: flex;
  margin-right: 12px;
  min-width: 24px;
  max-width: 24px;
  flex: 0;
  flex-direction: column;
  justify-content: center;
  font-size: 24px;
  color: #D2D2D2;
  text-align: right;
  &:before {
      position: absolute;
      left: -20px;
      content: "\E844";
      opacity: 0;
      transition: all 0.3s ease-in-out 0.05s;
      font-family: feather !important;
    }
  &.rowActive {
    color: #6190E8;
    &:before {
      opacity: 1;
      animation: animatedArrow ease-in-out 3.5s;
      animation-iteration-count: infinite;
      transform-origin: 50% 50%;
    }
  }
}
.rowEvaluator {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30px;
  justify-content: center;
}

.ok-button {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

@keyframes animatedArrow{
  0% {
    transform:  translate(0px,0px)  ;
  }
  50% {
    transform:  translate(-5px,0px)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
}

</style>
