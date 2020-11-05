<template>
  <div id="app">
    <nav-bar>
    </nav-bar>
    <img class="bg-img" src="https://pbs.twimg.com/media/CSSrfrxWIAE7OSQ.png:large" alt="">
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
  }
}
</script>

<style>
  body{
    margin: 0;
    padding:0
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
  }
  .bg-img{
        position: fixed;
        height: 100%;
        opacity: 60%;
        z-index: -1;
        top: 0;
        left: 0;
    }
</style>
