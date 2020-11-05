<template>
    <div class="home">
        <h1> Explor all selections of Movie" </h1>
        <movies :movies="movies"> </movies>
    </div>
</template>

<script>
import movies from "./MoviesConteiner"
import fetchMovie from "../utility"

export default {
    data() {
        return {
            movies:[]
        }
    },
    created() {
        this.movies=fetchMovie().results;
        
    },
    components:{
        movies
    }
}
</script>

<style scoped>
    .home{
        color: white;
        text-align: center;
    }
</style>