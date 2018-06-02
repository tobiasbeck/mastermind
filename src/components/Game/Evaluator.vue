<template>
  <!--<at-tooltip>
  <template slot="content" style="color: white !important;">
    <p><strong>Black Circle: </strong> Position and color of one pin is correct</p>
    <p><strong>Grey Circle: </strong> Only color of one pin is correct</p>
    <p><strong>The position of the black or grey Circle needn't to be the same as the pin</strong> </p>
  </template>-->
  <div class="eval">
    <div class="eval-row">
      <span :class="{
        half: formedResult[0] && formedResult[0] == 1,
        full: formedResult[0] && formedResult[0] == 2,
      }"></span>
      <span :class="{
        half: formedResult[1] && formedResult[1] == 1,
        full: formedResult[1] && formedResult[1] == 2,
      }"></span>
    </div>
    <div class="eval-row">
      <span :class="{
        half: formedResult[2] && formedResult[2] == 1,
        full: formedResult[2] && formedResult[2] == 2,
      }"></span><span :class="{
        half: formedResult[3] && formedResult[3] == 1,
        full: formedResult[3] && formedResult[3] == 2,
      }"></span>
    </div>
  </div>
  <!--</at-tooltip>-->
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    formedResult () {
      if (this.result && this.result.result) {
        return this.result.result
      }
      return []
    }
  }
}
</script>

<style lang="scss" scoped>
  .eval{
    display: flex;
    flex-direction: column;
    .eval-row{
      display: flex;
      flex-direction: row;
      span{
        width: 8px;
        height: 8px;
        border-radius: 4px;
        margin: 2px;
        border: 1px #D2D2D2 solid;
        background-color:white;
        transition: all 0.4s ease-in-out;
        &.full {
          background-color: #2C405A;
          border-color: #2C405A;
        }
        &.half {
          background-color: #D2D2D2;
        }
      }
    }
  }
</style>
