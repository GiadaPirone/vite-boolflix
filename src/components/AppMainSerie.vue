<script>
    import { store } from '../store';

    export default{
        name: "AppMainSerie",

        data (){
            return{
                store,
                bandiereDisponibile: ["it", "en", "pt"],
            }
        },
        methods:{
            generaImg(serie){
                if(serie.poster_path == null){
                    return "https://cdn131.picsart.com/295899653202201.jpg?type=webp&to=crop&r=256"
                } else{
                    return this.store.urlImg + serie.poster_path
                }
            },
            generaBandiera(percorso){
                return new URL (percorso, import.meta.url);

            }
        }
    }
</script>

<template>
    <div class="contenitore">
        <h1>Serie TV:</h1>

        <div class="card" v-for="serie in this.store.serieTV">
            <div class="contenitoreImg">
                <img :src="generaImg(serie)" alt="">
            </div>
            <h2>{{ serie.name}}</h2>
            <h3>{{ serie.original_name}}</h3>
            <img v-if="bandiereDisponibile.includes(serie.original_language)" :src="generaBandiera (`../assets/${serie.original_language}.svg`)" class="bandiera" alt="">
            <h4 v-else>{{ serie.original_language }}</h4>
            <p>{{ serie.vote_average }}</p>
        </div>
    </div>

</template>

<style scoped>
    .contenitore{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 50px;
        
    }
    .card{
        background-color: rgb(199, 83, 83);
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