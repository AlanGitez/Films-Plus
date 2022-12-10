import React from 'react'
import { useDispatch } from 'react-redux'
import { getSingleFilm } from '../../state/Movies/selectedFilm';
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths'
import { handlerHover } from './handlers';

export default function Movie({ movie, i }) {
    const dispatch = useDispatch();

    const handlerSelectFilm = () => {
        dispatch(getSingleFilm(movie))
        dispatch(toggleShowDetail())
    };

    return (
        <>
            {IMG_URL && movie ? 
                <div
                className={`movie movie-${i}`}
                onClick={handlerSelectFilm}
                onMouseOver={handlerHover}>
                <img className={`movie-${i}`} src={IMG_URL + movie.poster_path} alt="" />
            </div> : null}
        </>
    )
}
