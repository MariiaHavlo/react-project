import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllGenres} from "../../store/slices/genresSlice";
import Genre from "../../components/genre/Genre";

const GenresPage = () => {
    const dispatch = useDispatch();

    const {genres} = useSelector(state=>state['genresReducer'])
    console.log(genres)

    useEffect(()=>{
        dispatch(getAllGenres())
    },[])
    return (
        <div>
            genres page
            {genres && genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default GenresPage;