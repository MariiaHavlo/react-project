import React from 'react';
import {Route, Routes} from "react-router-dom";

import PopularMoviePage from "./pages/popularMoviePage/PopularMoviePage";
import UpcomingMoviePage from "./pages/upcomingMoviePage/UpcomingMoviePage";
import TopRatedMoviePage from "./pages/topRatedMoviePage/TopRatedMoviePage";
import NowPlayingMoviePage from "./pages/nowPayingMoviePage/NowPlayingMoviePage";
import Layout from "./components/layout/Layout";
import css from './App.module.css';
import MovieDetailsPage from "./pages/movieDetailsPage/MovieDetailsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'/'} element={<PopularMoviePage/>}>
                        <Route path={'/id'} element={<MovieDetailsPage/>}/>
                    </Route>
                    <Route path={'/upcoming'} element={<UpcomingMoviePage/>}/>
                    <Route path={'/top_rated'} element={<TopRatedMoviePage/>}/>
                    <Route path={'/now_playing'} element={<NowPlayingMoviePage/>}/>
                </Route>


            </Routes>
        </div>
);
};

export default App;