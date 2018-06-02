<template>
  <div id="index-page">
    <at-button type="primary" @click="startGame()" hollow>Start new game</at-button>
  </div>
</template>
<script>
export default {
  methods: {
    startGame () {
      this.$router.push('/game')
    }
  }
}
</script>
<style>
 #index-page {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 3vw;
 }
</style>
