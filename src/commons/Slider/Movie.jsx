import React from 'react'
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { getSingleFilm } from '../../state/Movies/selectedFilm';
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths'
import { handlerHover } from './handlers';

export default function Movie({ movie, i }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const movieRef = useRef();

    const handlerSelectFilm = (e) => {
        console.log(movieRef.current);
        console.log(e.target);
        dispatch(getSingleFilm(movie))
        dispatch(toggleShowDetail())
    };

    return (
        <>
            <div
                className={`movie movie-${i}`}
                onClick={(e) => handlerSelectFilm(e)}
                onMouseOver={handlerHover}
                ref={movieRef}>
                <img className={`movie-${i}`} src={IMG_URL + movie.poster_path} alt="" />
            </div>
        </>
    )
}
