<script>
    export default{
        name: "AppHeader",

        data (){
            return{
                cercaFilm:""
            }
        },
        methods:{

        }
    }
</script>


<template>
    <div class="contenitore">

        <div>
            <h1>BOOLFLIX</h1>
        </div>

        <div>
            <input type="text" placeholder="Cerca Film" v-model="cercaFilm">
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