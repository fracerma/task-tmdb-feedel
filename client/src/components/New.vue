<template>
    <div> 
        <h1>New and upcoming movies:</h1>
        <MoviesConteiner :movies="movies" />
    </div>
</template>

<script>
import MoviesConteiner from "./MoviesConteiner"
import {fetchServer,endpoints,listenerBottom} from "../utility.js"
export default {
    data() {
        return {
            movies: [],
            page:0,
            total_pages: 0,
            handler:null
        }
    },
    components:{
        MoviesConteiner
    },
    created() {
        fetchServer(endpoints.new,(res)=>{
            this.movies=res.results;
            this.total_pages=res.total_pages;
            if(this.total_pages>1) this.page=2;
            else this.page=1;
            this.handler=listenerBottom.bind(null,endpoints.new+"&page="+this.page,this.appendMovies);
            document.addEventListener("scroll",this.handler);
        })
    },
    methods: {
        appendMovies(res){
            document.removeEventListener("scroll",this.handler);
            if(this.page<this.total_pages){
                this.page+=1
                this.movies=[...this.movies, ...res.results];
                this.handler=listenerBottom.bind(null,endpoints.new+"&page="+this.page,this.appendMovies);
                document.addEventListener("scroll",this.handler);
            }
        }
    }
}
</script>

<style scoped>
    div{
        text-align: center;
    }

</style>