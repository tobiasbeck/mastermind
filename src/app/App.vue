<template>
  <div id="app">
    <heade />
    <router-view/>
  </div>
</template>

<script>
import Heade from './Header'
export default {
  name: 'App',
  components: { Heade }
}
</script>

<style>
#app {
  font-family: 'Work Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
