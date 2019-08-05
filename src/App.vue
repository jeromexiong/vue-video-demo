<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <video1 />
    <video3 />
    <video5 />
  </div>
</template>

<script>
import video1 from './components/01-video.vue'
import video3 from './components/03-video.vue'
import video5 from './components/05-video.vue'

export default {
  name: 'app',
  components: {
    video1,
    video3,
    video5,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
