import axios from "axios";

const apiKey = "f36f23edf6e10fd2ddcf939916b1f67a"

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/'
})


export const FilmsAPI = {
    getGeners(language){
        return instance.get(`genre/movie/list?api_key=${apiKey}&language=${language}`)
    },
    getFilms(language,pageCount=1){
        return instance.get(`discover/movie?api_key=${apiKey}&language=${language}&page=${pageCount}`)
    },
    getFilm(id,language){
        return instance.get(`/movie/${id}?api_key=${apiKey}&language=${language}`)
    },
    getSearch(text){
        return instance.get(`search/movie?api_key=${apiKey}&query=${text}`)
    },
    getMovies(language,genreId,page) {
        return instance.get(`/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=${page}`)
    },
}