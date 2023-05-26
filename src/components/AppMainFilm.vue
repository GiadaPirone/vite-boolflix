<script>
    import { store } from '../store';
    
    export default{
        name: "AppMainFilm",

        data (){
            return{
                store,
                urlImg: "https://image.tmdb.org/t/p/",
                dimensioneImg: "w342",
                nuovaImg:"https://en.wikipedia.org/wiki/Jellyfish#/media/File:Sea_Nettle_Jelly_1.jpg"
            }
        },
        methods:{
            generaImg(film){
                if(film.poster_path == null){
                    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Dy5ec6lBivrOax7FDsoYRR_jtDg2zAUVgQ&usqp=CAU"
                } else{
                    return this.store.urlImg + film.poster_path
                }
            }
        }
    }
</script>

<template>
    <div class="contenitore">
        <h1>Films:</h1>

        <div class="card" v-for="film in this.store.Films">
            <div>
                <img :src="generaImg(film)" alt="">
            </div>
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