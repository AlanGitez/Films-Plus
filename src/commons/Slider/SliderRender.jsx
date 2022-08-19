import React, { useRef, useEffect, useState } from 'react'
import { moveLeft, moveRigth } from '../../utils/pagination';
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"
import Movie from './Movie';
import { Movies } from '../../services';

export default function SliderRender({ category }) {
    const [objectMovies, setObjectMovies] = useState({});
    const row = useRef(null);
    const leftArrow = useRef(null);
    const rigthArrow = useRef(null);

    const paginationHandler = (e) => {
        e.target.id === leftArrow.current.id
            ? moveLeft(row) : moveRigth(row);
    };

    useEffect(() => {
        (async () => {
            const { data } = await Movies.getByGenre(category.id)
            setObjectMovies(data);
        })()
    }, [category]);


    return (
        <>
            <div className="main-container">
                <div className="menu">
                    <h1 className="title">{category.name}</h1>
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
                            {objectMovies.results?.map((movie, i) => (
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