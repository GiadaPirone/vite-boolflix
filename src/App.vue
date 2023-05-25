<script >
// https://api.themoviedb.org/3/movie/550?api_key=86bfacbb56746e47c21e5ae8bcdeeb10

import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

import {store} from './store.js'
import axios from 'axios'

export default{
  components:{
    AppHeader,
    AppMain,

  },
  data (){
    return{
        store
    }
  },
  mounted(){
     axios.get(this.store.url).then(r=>{
      this.store.filtoFilm = r.data.results
      console.log(r.data.results)
     })
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>

  <main>
    <AppMain />
  </main>
</template>

<style lang="scss"  >
// @use "./styles/generic.scss" as*;
header{
  background-color: black;
}
</style>


