import {reactive} from "vue"

export const store= reactive({
    urlImg: "https://image.tmdb.org/t/p/w185",
    urlSerie:"https://api.themoviedb.org/3/search/tv?api_key=86bfacbb56746e47c21e5ae8bcdeeb10&query=",
    url: "https://api.themoviedb.org/3/search/movie?api_key=86bfacbb56746e47c21e5ae8bcdeeb10&query=",
    Films: [],
    serieTV: [],
    cercaFilm:"",
})


// https://api.themoviedb.org/3/search/movie?api_key=86bfacbb56746e47c21e5ae8bcdeeb10&query=all