import React, { Suspense } from 'react'
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const SliderRender = React.lazy(() => import('./SliderRender'));

export default function Slider({ category, index }) {
    const [onView, ref] = useIntersectionObserver({ margin: "150px" })
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


        </>
    );
}