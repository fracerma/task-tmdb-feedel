<template>
  <div>
      <MoviesConteiner :movies="movies"/>
  </div>
</template>

<script>
import { endpoints, fetchServer } from '../utility'
import MoviesConteiner from './MoviesConteiner.vue'
export default {
    components:{
        MoviesConteiner
    },
    data() {
        return {
            movies: []
        }
    },
    created() {
        fetchServer(endpoints.popular+"&with_genres="+this.$route.params.id,(data)=>{
            this.movies=data.results;
        });
    },
}
</script>

<style>

</style>