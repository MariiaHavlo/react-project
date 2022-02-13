const baseURL = 'https://api.themoviedb.org/3'
export const API_KEY = '0386b8db91517882b6ebf2eb69c2152e';

export default baseURL;

export const urls = {
    popularMovies:`/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    nowPlaying:'/now-playing',
    upcoming:'/upcoming',
    topRated:`/movie/top_rated?api_key=${API_KEY}`,

    movies:`/discover/movie?api_key=${API_KEY}`,

    genres:`/genre/movie/list?api_key=${API_KEY}`,

    genresFilterById:`/discover/movie?api_key=${API_KEY}&language=en-US&with_genres`

    // get genres https://api.themoviedb.org/3/genre/movie/list?api_key=0386b8db91517882b6ebf2eb69c2152e

    // https://api.themoviedb.org/3/discover/movie?api_key=0386b8db91517882b6ebf2eb69c2152e&language=en-US&with_genres=28


}