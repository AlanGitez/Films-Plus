import React, { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleShowDetail } from '../../state/UI/showDetail';
import { IMG_URL } from '../../utils/paths';

export default function DetailModal() {
    const detailContainer = useRef();
    const singleFilm = useSelector(state => state.singleFilm);
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
                        <button
                            className='btn-close'
                            onClick={handleClose}>X</button>
                    </div>

                </header>
                <div className='detail'>
                    <div className='description'>
                        {singleFilm.overview}
                    </div>
                    <div className='info'></div>
                </div>
            </section>
        </>
    )
}
