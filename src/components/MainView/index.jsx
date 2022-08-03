import React from 'react'
import { useSelector } from 'react-redux'
import { IMG_URL } from '../../utils/paths'
import { BsFillInfoCircleFill } from "react-icons/bs"

export default function MainView() {
    const popularMovies = useSelector(state => state.popularMovies).movies;
    const singleFilm = useSelector(state => state.singleFilm)

    const pathImageGenerate = () => {
        if (singleFilm.id) return singleFilm.backdrop_path
        // if (popularMovies.length) return popularMovies[0].backdrop_path
    }

    return (
        <>
            <div className="mainview-container">

                <img
                    src={IMG_URL + pathImageGenerate()}
                    alt="Main Image" />

                <div className='info-container'>
                    <div className="info">
                        <h1 className="title">{singleFilm.title}</h1>
                        <div className="description">
                            {singleFilm.overview}
                        </div>
                        <div className="menu-container">
                            <BsFillInfoCircleFill className='info-icon' />
                            <button className='btn-info'>MORE INFO</button>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
