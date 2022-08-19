import React, { useRef } from 'react'
import { moveLeft, moveRigth } from '../../utils/pagination';
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import { useSelector } from "react-redux";
import Movie from './Movie';


export default function PopularSlider() {
    const popularMovies = useSelector(state => state.popularMovies);
    const row = useRef(null);
    const leftArrow = useRef(null);
    const rigthArrow = useRef(null);

    const paginationHandler = (e) => {
        e.target.id === leftArrow.current.id
            ? moveLeft(row) : moveRigth(row);
    };

    return (
        <>
            <div className="main-container">
                <div className="menu">
                    <h1 className="title">Peliculas recomendadas</h1>
                    <div className="nav"></div>
                </div>
                <div className="main-content">
                    <button
                        ref={leftArrow}
                        id="left-arrow"
                        className="arrow left-arrow"
                        onClick={paginationHandler}>{<IoIosArrowBack className='arrow-icon left' />}</button>

                    <div className="slider-container">
                        <div ref={row} className="slider">
                            {popularMovies.movies?.map((movie, i) => (
                                <Movie key={i} movie={movie} i={i} />
                            ))}

                        </div>
                    </div>

                    <button
                        ref={rigthArrow}
                        id="rigth-arrow"
                        className="arrow rigth-arrow"
                        onClick={paginationHandler}>{<IoIosArrowForward className='arrow-icon rigth' />}</button>
                </div>
            </div>
        </>
    )
}
