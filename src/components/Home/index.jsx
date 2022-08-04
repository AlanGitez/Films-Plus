import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from '../../state/Movies/popular';
import MainView from './MainView'
import Slider from '../../commons/Slider'
import { popular } from '../../services/Movies';

export default function Home() {
  const popularMovies = useSelector(state => state.popularMovies).movies;
  const singleFilm = useSelector(state => state.singleFilm)
  const [mainMovies, setMainMovies] = useState([]);
  const dispatch = useDispatch()


  return (
    <>
      {popularMovies?.length && <MainView movie={popularMovies[0]} />}
      <Slider />
    </>
  )
}
