<template>
  <div class="container-lg mt-3">
        <div class="row justify-content-center">
            <movie v-for="(movie, index) in movies" :key="index"
                :movie=movie
            ></movie>
        </div>
  </div>
</template>

<script>
import movie from "./MovieCard"
export default {
    props:["movies"],
    components:{
        movie
    }
}
</script>

<style>

</style>