import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <div className={css.container}>
                    <div className={css.links}>
                        <NavLink to={'/'}>Popular Movies</NavLink>
                        <NavLink to={'/upcoming'}>Upcoming</NavLink>
                        <NavLink to={'/top_rated'}>Top Rated</NavLink>
                        <NavLink to={'/now_playing'}>Now Playing</NavLink>
                        <NavLink to={'/genres'}>Genres</NavLink>
                    </div>

                </div>

            </div>

            <div><Outlet/>></div>
        </div>
    );
};

export default Layout;