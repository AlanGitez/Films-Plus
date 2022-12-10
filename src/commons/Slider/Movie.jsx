import React from 'react'
import { useRef } from 'react';
import { useDispatch } from 'react-redux'
import { getSingleFilm } from '../../state/Movies/selectedFilm';
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths'
import { handlerHover } from './handlers';

export default function Movie({ movie, i }) {
    const dispatch = useDispatch();
    const movieRef = useRef();

    const handlerSelectFilm = (e) => {
        dispatch(getSingleFilm(movie))
        dispatch(toggleShowDetail())
    };

    return (
        <>
            <div
                className={`movie movie-${i}`}
                onClick={(e) => handlerSelectFilm}
                onMouseOver={handlerHover}
                ref={movieRef}>
                <img className={`movie-${i}`} src={IMG_URL + movie.poster_path} alt="" />
            </div>
        </>
    )
}
