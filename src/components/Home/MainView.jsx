import React, { useRef, useEffect, useState } from 'react'
import { IMG_URL } from '../../utils/paths'
import { BsFillInfoCircleFill } from "react-icons/bs"
import { infoHover } from './hover';



export default function MainView({ valorateMovies }) {
    const [isHover, setIsHover] = useState(false)
    const [index, setIndex] = useState(0);

    const info = useRef();
    const main = useRef();

    useEffect(() => {
        infoHover(main, info)
        const interval = setInterval(() => {
            if (!isHover) {
                if (index >= valorateMovies.length - 1) setIndex(0)
                else setIndex(index + 1);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [index, isHover])

    return (
        <>
            <div
                ref={main}
                className="mainview-container"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)} >

                <img
                    src={IMG_URL + valorateMovies[index]?.backdrop_path}
                    alt="Main Image" />

                <div ref={info} className='info-container'>
                    <div className="info">
                        <h1 className="title">{valorateMovies[index]?.title}</h1>
                        <div className="description-menu-container">
                            <div className="description">
                                {valorateMovies[index]?.overview}
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
