import {reactive} from "vue"

export const store= reactive({
    url: "https://api.themoviedb.org/3/search/movie?api_key=86bfacbb56746e47c21e5ae8bcdeeb10&query=",
    filtoFilm: [],
})


// https://api.themoviedb.org/3/search/movie?api_key=86bfacbb56746e47c21e5ae8bcdeeb10&query=all