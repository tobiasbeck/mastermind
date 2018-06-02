<template>
  <div :class="{
    field: true,
    disabled: disabled,
    [color]: !isEmpty,
    active: active
    }">
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: -1
    },
    disabled: {
      type: Boolean,
      default: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isEmpty () {
      if (this.value === -1) {
        return true
      }
      return false
    },
    color () {
      if (!this.isEmpty) {
        let colors = ['red', 'green', 'blue', 'orange', 'purple', 'grey']
        return colors[this.value - 1]
      }
      return 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
  .field {
    width: 30px;
    height: 30px;
    background-color:white;
    border-radius: 30px;
    color: #6190E8;
    border: 1px #6190E8 solid;
    margin: 7px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: 0.2s all ease-in-out;
    .icon {
      transition: 0.2s all ease-in-out;
    }
    &.disabled {
      color: #d2d2d2;
      border-color:#d2d2d2;
    }
    &:not(.disabled) {
      cursor: pointer;
      &:hover, &.active {
      transform: scale(1.2);
        .icon {
          transform: scale(0.8);
        }
      }
    }

    &.red {
      background-color: #F44336;
      border-color: #F44336;
    }
    &.blue {
      background-color: #2196F3;
      border-color: #2196F3;
    }
    &.green {
      background-color: #8BC34A;
      border-color: #8BC34A;
    }
    &.orange {
      background-color: #FF9800;
      border-color: #FF9800;
    }
    &.purple {
      background-color: #9C27B0;
      border-color: #9C27B0;
    }
    &.grey {
      background-color: #607D8B;
      border-color: #607D8B;
    }
  }
</style>
