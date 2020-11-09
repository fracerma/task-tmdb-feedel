<template>
    <div class="container">
        <h1>
            Movies Categories:
        </h1>
        <div class="row justify-content-center">
            <div class="card cat-card" v-for="(genre, index) in genres" :key="index" @click="openCategory(genre.id)">
                <img v-if="genre.poster_path" :src="'https://image.tmdb.org/t/p/original/'+genre.poster_path" alt="" srcset="">
                <h2>{{genre.name}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import {fetchServer,endpoints} from "../utility.js"
export default {
    data() {
        return {
            genres:[]
        }
    },
    created() {
        fetchServer(endpoints.genres,(data)=>{
            this.addPosters(data);
        })
    },
    methods: {
        addPosters(data){
            data.forEach(el=>{
                fetchServer(endpoints.vote_avg+"&with_genres="+el.id,(data)=>{
                    const results=data.results;
                    do{
                        const random=Math.floor(Math.random() * results.length-1);
                        el.poster_path=results[random].poster_path;
                    } while(el.poster_path==null);
                    this.genres.push(el);
                })
            })
        },
        openCategory(id){
            this.$router.push('/category/'+id)
        }
    },
    
}
</script>

<style scoped>
    h1{
        text-align: center;
    }
    
    .cat-card{
        text-align: center;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
        width: 210px;
        
    }
    .cat-card:hover{
        cursor: pointer;
        box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.75);
    }
    img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width:208px;
    }
</style>