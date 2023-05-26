<script>
    import { store } from '../store';
    
    export default{
        name: "AppMain",

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
    }
    .card{
        background-color: grey;
        width: 300px;
        min-height: 150px;
        border: solid 1px black;
    }
</style>