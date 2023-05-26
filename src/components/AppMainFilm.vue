<script>
    import { store } from '../store';
    
    export default{
        name: "AppMainFilm",

        data (){
            return{
                store,
            }
        },
        methods:{

        }
    }
</script>

<template>
    <div class="contenitore">
        <h1>Films:</h1>

        <div class="card" v-for="film in this.store.Films">
            <h2>{{ film.title }}</h2>
            <h3>{{ film.original_title }}</h3>
            <h4>{{ film.original_language }}</h4>
            <p>{{ film.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped>
    .contenitore{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        
    }
    .card{
        background-color: rgb(129, 11, 11);
        width: 300px;
        min-height: 150px;
        border: solid 1px black;
    }
</style>