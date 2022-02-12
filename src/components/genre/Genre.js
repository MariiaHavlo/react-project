import React from 'react';

const Genre = ({genre:{id,name}}) => {
    return (
        <div>
            hello
            {id}
            {name}
        </div>
    );
};

export default Genre;