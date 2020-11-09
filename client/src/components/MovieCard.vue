<template>
    <div class="card movie_card" @click="openMovie">
        <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original/'+movie.poster_path" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{movie.title}}</h5>
            <div v-if="false" class="credits">
                <p>{{movie.overview}}</p>
            </div>
            <span class="movie_info float-left">{{movie.release_date}}</span>
            <span class="movie_info float-right"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M312.5 370c-10.8 7.9-21.1 8.4-27.3 7.7 -15.7-1.8-29.7-13.6-37.6-31.6 -5.3-12.1-8.1-28.4-4.9-45.5 -24.9 13.3-56.9 43.6-56.9 111.2 0 38.7 31.5 70.3 70.3 70.3s70.3-31.5 70.3-70.3C326.3 396.6 321.3 382 312.5 370z"/><path d="M465.1 290.7l-2.3-40.3 -24.6 32c-2 2.6-6.1 7.1-11.5 11.2 2.1-7 4-14.9 5.2-23.7 4.3-30.4 1.6-77.1-35.6-126.7l-15.6-20.8 -10.2 23.9c-11.8 27.6-30.9 41.5-48.6 35.3 -13.7-4.7-24.7-20.4-30.4-42.9 -5.3-21-8.4-57.9 7.1-114.6L305.2 0l-24.3 5.5c-82.1 18.5-137.5 76.8-160 168.6 -9.5 38.6-11.3 75.2-11 99.9 -19.4-15.7-29.1-29.5-29.3-29.8L62 217.1l-8.4 31.8c-4.6 17.5-7 35.6-7 53.7 0 114.6 92.6 208 206.9 209.4 -54.1-1.4-97.7-45.8-97.7-100.2 0-70.2 30.1-107.6 55.4-126.6 27.6-20.7 55.4-24.4 56.6-24.6l34.7-4.4 -20.8 28.2c-13.1 17.7-12 37.3-6.6 49.6 3.9 8.9 9.6 13.4 13.5 13.8 4.9 0.6 9.8-5.1 12.3-8.5l9.8-13.3 12.3 11.1c21.2 19 33.3 46.2 33.3 74.6 0 54.4-43.6 98.9-97.7 100.2 114.3-1.4 206.9-94.8 206.9-209.4C465.4 298.8 465.3 294.8 465.1 290.7z"/></svg>
                {{movie.vote_average}}/10
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['movie'],
    data() {
        return {
        }
    },
    methods: {
        openMovie(){
            this.$router.push('/movie/'+this.movie.id);
        }
    },
}
</script>

<style scoped>
    img {
        pointer-events: none;
    }
    .movie_card{
        padding: 0 !important;
        width: 20rem;
        color: black;
        margin: 20px;
        border-radius: 10px;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 15px 0 rgba(0, 0, 0, 0.19);
    }
    .movie_card:hover{
        cursor: pointer;
        box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.75);
    }
    .movie_card img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 25rem;
    }
    .movie_info{
        color: #5e5c5c;
        font-size: 20px;
    }
    .movie_info svg{
        width: 20px;
    }
    .card-title{
        width: 80%;
    }
    .credits{
        margin-bottom: 20px;
        border-radius: 8px;
        border: 3px solid rgb(3,37,65);
        font-size: 18px;
        font-style: italic;
    }
    .credits .card-body{
        padding: 0;
    }
    .credits p{
        padding-top: 15px;
        padding-left: 18px;
    }
</style>
