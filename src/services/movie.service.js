import {axiosService} from "./axios.service";
import {urls} from "../constans";





export const movieService = {

    getPopular:()=>axiosService.get(urls.popularMovies).then(value => value.data),
    // getUpcoming:()=>axiosService.get(urls.upcoming),
    getRating:()=>axiosService.get(urls.topRated).then(value => value.data),
    // getNowPlaying:()=>axiosService.get(urls.nowPlaying),
    getByIdPopular:(id)=>axiosService.get(`${urls.movies}/${id}`).then(value => value.data),

    getGenres:()=>axiosService.get(urls.genres).then(value => value.data),
    getGenresFilterById:(id)=>axiosService.get(`${urls.genresFilterById}/${id}`).then(value => value.data)
}