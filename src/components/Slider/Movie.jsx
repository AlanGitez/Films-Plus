import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleFilm } from '../../state/Movies/selectedFilm';
import { IMG_URL } from '../../utils/paths'

export default function Movie({ movie }) {
    const dispatch = useDispatch();

    return (
        <>
            <div className="movie" onClick={() => dispatch(getSingleFilm(movie))}>
                <img src={IMG_URL + movie.backdrop_path} alt="" />
            </div>
        </>
    )
}
