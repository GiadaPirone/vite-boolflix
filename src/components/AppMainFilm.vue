<script>
    import { store } from '../store';
    
    export default{
        name: "AppMainFilm",

        data (){
            return{
                store,
                bandiereDisponibile: ["it", "en", "pt"],
                 
            }
        },
        methods:{
            generaImg(film){
                if(film.poster_path == null){
                    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Dy5ec6lBivrOax7FDsoYRR_jtDg2zAUVgQ&usqp=CAU"
                } else{
                    return this.store.urlImg + film.poster_path
                }
            },
            recuperaBandiera(percorso){
                return new URL (percorso, import.meta.url);
            }
            
        }
    }
</script>

<template>
    <div class="contenitore">
        <h1>Films:</h1>

        <div class="card" v-for="film in this.store.Films">
            <div class="contenitoreImg">
                <img :src="generaImg(film)" alt="">
            </div>
            <h2>{{ film.title }}</h2>
            <h3>{{ film.original_title }}</h3>
            <h4>{{ film.original_language }}</h4>
            <img v-if="bandiereDisponibile.includes(film.original_language)" :src="recuperaBandiera(`../assets/${film.original_language}.svg`)" class="bandiera" alt="">
            <p v-else >{{ film.vote_average }}</p>
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
    .contenitoreImg{
        display: flex;
        justify-content: center;
    }

    .bandiera{
        height: 20px;
        width: 30px;
    }
</style>