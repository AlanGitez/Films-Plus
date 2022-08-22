import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths';

export default function DetailModal() {
    const detailContainer = useRef();
    const popularMovies = useSelector(state => state.popularMovies).movies;
    const singleFilm = useSelector(state => state.singleFilm);
    const dispatch = useDispatch();

    const handleClose = (e) => {
        dispatch(toggleShowDetail())
    };

    // useEffect(() => {
    //     const body = document.querySelector("body");
    //     body.appendChild(detailContainer.current);
    // }, []);

    return (
        <>
            <section className='detail-container' ref={detailContainer}>
                <header className='detail-header'>

                    <img src={IMG_URL + singleFilm.backdrop_path} alt="" />

                    <div className='menu'>
                        <button
                            className='btn-close'
                            onClick={handleClose}>X</button>
                    </div>

                </header>
                <div className='detail'>
                    <div className='description'>
                        {popularMovies?.length &&
                            popularMovies[0].overview
                        }

                    </div>
                    <div className='info'></div>
                </div>
            </section>
        </>
    )
}
