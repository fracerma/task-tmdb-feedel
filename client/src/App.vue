<template>
  <div id="app">
    <nav-bar>
    </nav-bar>
    <img class="bg-img" :src="bg_img">
    <router-view>
    </router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      bg_img: "https://pbs.twimg.com/media/CSSrfrxWIAE7OSQ.png:large"
    }
  },
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  body{
    margin: 0;
    padding:0
  }
  #app {
    font-family: 'Noto Sans JP', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
  .bg-img{
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100%;
    min-width: 100%;
    opacity: 0.6;
    z-index: -1;
  }
</style>
