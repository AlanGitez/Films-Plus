import { useRef, useEffect, useState } from 'react'

export default function useIntersectionObserver({margin = "100px"}){
    const [onView, setOnView] = useState(false);
    const ref = useRef();

    useEffect(() => {
        let observer;
        const onChange = (entries, observer) => {
            const element = entries[0];
            if (element.isIntersecting) {
                setOnView(true)
                observer.disconnect();
            }
        };

        Promise.resolve(
            IntersectionObserver
                ? IntersectionObserver
                : import("intersection-observer")
        ).then(() => {
            observer = new IntersectionObserver(onChange, { rootMargin: margin })
            observer.observe(ref.current)
        });
    }, []);

    return [onView, ref]
};