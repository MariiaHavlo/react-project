import {axiosService} from "./axios.service";
import {urls} from "../constans";





export const movieService = {

    getPopular:()=>axiosService.get(urls.popularMovies).then(value => value.data),
    // getUpcoming:()=>axiosService.get(urls.upcoming),
    getRating:()=>axiosService.get(urls.topRated).then(value => value.data),
    // getNowPlaying:()=>axiosService.get(urls.nowPlaying),
    // getById:()=>axiosService.get(`/movie/{movie_id}`)
}