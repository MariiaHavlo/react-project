import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Genre.module.css'

const Genre = ({genre:{id,name},movies}) => {

    return (
        <div className={css.genres}>
            <NavLink to={id.toString()} state={id}>
                <h4>{name}</h4>
            </NavLink>


        </div>
    );
};

export default Genre;