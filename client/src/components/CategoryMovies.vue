<template>
  <div>
      <MoviesConteiner :movies="movies"/>
  </div>
</template>

<script>
import { endpoints, fetchServer , listenerBottom} from '../utility'
import MoviesConteiner from './MoviesConteiner.vue'
export default {
    components:{
        MoviesConteiner
    },
    data() {
        return {
            movies: [],
            page:0,
            total_pages: 0,
            handler:null
        }
    },
    created() {
        fetchServer(endpoints.vote_avg+"&with_genres="+this.$route.params.id,(res)=>{
            this.movies=res.results;
            this.total_pages=res.total_pages;
            if(this.total_pages>1) this.page=2;
            else this.page=1;
            this.handler=listenerBottom.bind(null,endpoints.vote_avg+"&with_genres="+this.$route.params.id+"&page="+this.page,this.appendMovies);
            document.addEventListener("scroll",this.handler);
        })
        
    },
    methods: {
        appendMovies(res){
            document.removeEventListener("scroll",this.handler);
            if(this.page<this.total_pages){
                this.page+=1
                this.movies=[...this.movies, ...res.results];
                listenerBottom.bind(null,endpoints.vote_avg+"&with_genres="+this.$route.params.id+"&page="+this.page,this.appendMovies);
                document.addEventListener("scroll",this.handler);
            }
        }
    },
}
</script>

<style>

</style>