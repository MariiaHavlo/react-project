import React from 'react';
import {NavLink} from "react-router-dom";

const Genre = ({genre:{id,name},movies}) => {

    return (
        <div>
            <NavLink to={id.toString()} state={id}>
                <div>{name}</div>
            </NavLink>


        </div>
    );
};

export default Genre;