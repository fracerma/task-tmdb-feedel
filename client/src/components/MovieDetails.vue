<template>
  <div v-if="movie" class="preview">
      <div class="left">
          <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path" alt="" srcset="">
      </div>
      <div class="right">
            <h1>
                {{movie.title}}
            </h1>
             <p>  
                {{movie.overview}}
            </p>
             <p>  
                <strong>Category: </strong>
                <span v-for="cat in movie.genres" :key="cat.id"> 
                    <router-link :to="'/category/'+cat.id">{{cat.name}} </router-link>
                </span>
            </p>
      </div>
  </div>
</template>

<script>
import { endpoints, fetchServer } from '../utility'
export default {
    data() {
        return {
            movie: null
        }
    },
    created() {
        fetchServer(endpoints.movie_details(this.$route.params.id),(data)=>{
            this.movie=data;
        })
    },
}
</script>

<style>
    .preview{
        width: 90%;
        margin:auto;
        margin-top: 30px;
        background: ivory;
        display: flex;
    }
    .left{
        width: 30%;
    }
    .left img{
        width: 100%;
    }
    .right{
        width: 70%;
        padding: 10px;
    }

</style>