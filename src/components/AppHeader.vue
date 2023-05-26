<script>
import axios from 'axios';
import { store } from '../store';
    export default{
        name: "AppHeader",

        data (){
            return{
                store,
                
            }
        },
        methods:{
            filtraFilm(){
                this.chiamaFilms();
                this.chiamaSerie();
               
            },
            chiamaFilms(){
                axios.get(`${this.store.url}${this.store.cercaFilm}`).then(r=>{
                    this.store.Films = r.data.results
                    console.log("film",r.data.results);
                })
            },
            chiamaSerie(){
                axios.get(`${this.store.urlSerie}${this.store.cercaFilm}`).then(r=>{
                    this.store.serieTV = r.data.results
                    console.log("serie tv", r.data.results);
                })
            }
        },
    }
</script>


<template>
    <div class="contenitore">

        <div>
            <h1>BOOLFLIX</h1>
        </div>

        <div>
            <input type="text" placeholder="Cerca Film" @change="filtraFilm" v-model="store.cercaFilm">
            <button>cerca</button>
        </div>
    </div>
</template>

<style scoped>

    h1{
        color: red;
    }

    .contenitore{
        display: flex;
    }
</style>