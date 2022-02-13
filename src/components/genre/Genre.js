import React from 'react';
import {NavLink} from "react-router-dom";

const Genre = ({genre:{id,name}}) => {
    return (
        <div>
            <NavLink to={id.toString()}>
                <div>{name}</div>
            </NavLink>


        </div>
    );
};

export default Genre;