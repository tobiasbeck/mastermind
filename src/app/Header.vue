<template>
  <div class="header">
    <div class="head-el el-left"></div>
    <div class="head-el"><h1>Mastermind</h1></div>
    <div class="head-el el-right"><!--<at-button type="primary" hollow>New Game</at-button>--></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 3vh;
    padding-bottom:5vh;
    width: 100%;
    text-align: center;
    h1 {
      font-size: 8vh;
    }
    .head-el {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      &.el-right {
        justify-content: flex-end;
        padding-right: 6vh;
      }
      &.el-left {
        justify-content: flex-start;
        padding-left: 6vh;
      }
    }
  }
</style>
