import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths';
import Info from './Info';

export default function DetailModal() {
    const detailContainer = useRef();
    const singleFilm = useSelector(state => state.singleFilm);
    const showDetail = useSelector(state => state.showDetail);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClose = (e) => {
        dispatch(toggleShowDetail())
    };

    return (
        <>
            <section className='detail-container' ref={detailContainer}>
                <header className='detail-header'>

                    <img src={IMG_URL + singleFilm.backdrop_path} alt="" />

                    <div className='menu'>
                        <div className="classification"></div>
                        <button
                            className='btn-close'
                            onClick={handleClose}>X</button>
                    </div>

                </header>
                <div className='detail'>

                    <Info film={singleFilm} />

                    <div className='description defail-container'>
                        <p>
                            {singleFilm.overview}
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}
