import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const movieService = {
    getPopular:()=>axiosService.get(urls.popularMovies),
    getUpcoming:()=>axiosService.get(urls.upcoming),
    getRating:()=>axiosService.get(urls.topRated),
    getNowPlaying:()=>axiosService.get(urls.nowPlaying),
    getById:()=>axiosService.get(`/movie/{movie_id}`)
}