import React, { Suspense } from 'react'
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import DetailModal from '../DetailModal';

const SliderRender = React.lazy(() => import('./SliderRender'));

export default function Slider({ category, index }) {
    const [onView, ref] = useIntersectionObserver({ margin: "150px" })
    const singleFilm = useSelector(state => state.singleFilm);
    const showDetail = useSelector(state => state.showDetail);
    return (
        <>
            <Suspense>
                <div
                    ref={ref}
                    id={index}
                    className="virtual-container">
                    {onView && <SliderRender category={category} />}
                </div>
            </Suspense>
            <Routes>
                <Route path='/*' element={showDetail && <DetailModal film={singleFilm} />} />
            </Routes>

        </>
    );
}