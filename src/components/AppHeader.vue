<script>
import axios from 'axios';
import { store } from '../store';
    export default{
        name: "AppHeader",

        data (){
            return{
                store,
                cercaFilm:""
            }
        },
        methods:{
            filtraFilm(){
                axios.get(this.store.url).then(r=>{
                    this.store.Film = r.data
                    console.log(r.data)
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
            <input type="text" placeholder="Cerca Film" @change="filtraFilm" v-model="cercaFilm">
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