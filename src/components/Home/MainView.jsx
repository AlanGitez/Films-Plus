import React, { useRef, useEffect } from 'react'
import { useSelector } from "react-redux";
import { IMG_URL } from '../../utils/paths'
import { BsFillInfoCircleFill } from "react-icons/bs"
import { infoHover } from './hover';
export default function MainView({ movie }) {
    const singleFilm = useSelector(state => state.singleFilm)

    const info = useRef(null);
    const main = useRef(null);

    useEffect(() => {
        infoHover(main, info)
    }, [])

    return (
        <>
            <div ref={main} className="mainview-container">

                {/* para que la img funcione bien tengo que armar el carousel como tenia en mente, ese condicional de abajo es lo que da problemas. El detalle de singleFilm se deberia ver distinto, pienso en un modal */}
                <img
                    src={IMG_URL + singleFilm.backdrop_path || movie.id && movie?.backdrop_path}
                    alt="Main Image" />

                <div ref={info} className='info-container'>
                    <div className="info">
                        <h1 className="title">{singleFilm.title || movie?.title}</h1>
                        <div className="description-menu-container">
                            <div className="description">
                                {singleFilm.overview || movie?.overview}
                            </div>

                            <div className="menu-container">
                                <BsFillInfoCircleFill className='info-icon' />
                                <button className='btn-info'>MORE INFO</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
