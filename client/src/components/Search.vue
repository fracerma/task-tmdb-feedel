<template>
    <div>
        <h1>Search a Movie</h1>
        <input @keyup="search" type="text" placeholder="search a movie title" v-model="value">
        <movies-conteiner :movies="movies"/>
    </div>
</template>

<script>
import { endpoints, fetchServer } from '../utility';
import MoviesConteiner from './MoviesConteiner.vue';
export default {
    data() {
        return {
            value: '',
            outputValue: '',
            timeout: null,
            movies:[]
        }
    },
    components: {
        MoviesConteiner
    },
    methods: {
          search: function() {
            clearTimeout(this.timeout);
            var me = this;
            this.timeout = setTimeout(function () {
                console.log('Searching: ', me.value);
                me.outputValue = me.value;
                fetchServer(endpoints.search(me.value),(data)=>{
                    me.movies=data.results;
                });
            }, 1000);
          }
        }
}
</script>

<style scoped>
    div{
        text-align: center;
    }
    input{
        width: 50%;
    }

</style>