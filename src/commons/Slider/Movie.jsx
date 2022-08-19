import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { getSingleFilm } from '../../state/Movies/selectedFilm';
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths'
import { handlerHover } from './handlers';

export default function Movie({ movie, i }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerSelectFilm = () => {
        dispatch(getSingleFilm(movie))
        dispatch(toggleShowDetail())
    };

    return (
        <>
            <div
                className={`movie movie-${i}`}
                onClick={handlerSelectFilm}
                onMouseOver={handlerHover}>
                <img className={`movie-${i}`} src={IMG_URL + movie.poster_path} alt="" />
                {/* <header className='detail-header'>
                </header>
                <div className='detail-container'>
                    <div className='detail'>
                        <div className='info'></div>
                        <div className='description'></div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
