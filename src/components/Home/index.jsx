import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies } from '../../state/Movies/popular';
import MainView from './MainView'
import PopularSlider from '../../components/PopularSlider';
import { getGenres } from '../../state/Movies/genres';
import { mostValorate } from './mostValorate';

const Slider = React.lazy(() => import('../../commons/Slider'))

export default function Home() {
  const popularMovies = useSelector(state => state.popularMovies).movies;
  const genres = useSelector(state => state.genres);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      if (!popularMovies?.length) return dispatch(getPopularMovies());
      if (!genres?.length) return dispatch(getGenres());
    })()
  }, [popularMovies, genres, dispatch])


  return (
    <>
      <div className="home">
        {popularMovies?.length && <MainView valorateMovies={mostValorate(popularMovies, 5)} />}

        {/* <div className="popular">
          <PopularSlider />
        </div> */}

        <Suspense>
          {genres.map((item, i) => (
            <div className={`${item.name} home-section-container`} key={i}>
              <Slider category={{ name: item.name, id: item.id }} index={i} />
              {
                <div className="slider-annex">
                  <div className='contenido'>

                  </div>
                </div>
              }
            </div>
          ))}
        </Suspense>
      </div>
    </>
  )
}
