import React from 'react';
import {Route, Routes} from "react-router-dom";

import PopularMoviePage from "./pages/popularMoviePage/PopularMoviePage";
import UpcomingMoviePage from "./pages/upcomingMoviePage/UpcomingMoviePage";
import TopRatedMoviePage from "./pages/topRatedMoviePage/TopRatedMoviePage";
import NowPlayingMoviePage from "./pages/nowPayingMoviePage/NowPlayingMoviePage";
import Layout from "./components/layout/Layout";
import css from './App.module.css';
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";
import GenresPage from "./pages/genresPage/GenresPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<PopularMoviePage/>}>
                    </Route>
                        <Route path={'/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'/upcoming'} element={<UpcomingMoviePage/>}/>
                    <Route path={'/top_rated'} element={<TopRatedMoviePage/>}>
                    </Route>
                    <Route path={'/top_rated/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'/now_playing'} element={<NowPlayingMoviePage/>}/>
                    <Route path={'/genres'} element={<GenresPage/>}/>
                </Route>


            </Routes>
        </div>
);
};

export default App;