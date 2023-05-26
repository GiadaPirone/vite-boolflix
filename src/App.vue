<script >
// https://api.themoviedb.org/3/movie/550?api_key=86bfacbb56746e47c21e5ae8bcdeeb10

import AppHeader from './components/AppHeader.vue'
import AppMainFilm from './components/AppMainFilm.vue'
import AppMainSerie from './components/AppMainSerie.vue'

import {store} from './store.js'
import axios from 'axios'

export default{
  components:{
    AppHeader,
    AppMainFilm,
    AppMainSerie,

  },
  data (){
    return{
        store,

    }
  },
  mounted(){

    //  axios.get(this.store.url).then(r=>{
    //   this.store.filtoFilm = r.data.results
    //   console.log(r.data)
    //  })
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMainFilm />
    <AppMainSerie />

  </main>
</template>

<style lang="scss"  >
// @use "./styles/generic.scss" as*;
header{
  background-color: black;
}

main{
  background-color: gray;
}
</style>


