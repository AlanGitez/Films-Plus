import React, { useEffect, useState } from 'react'
import Movies from '../../services/Movies';

export default function Info({ film }) {
    const [data, setData] = useState({});
    console.log(film.id);



    useEffect(() => {
        (async () => {
            const { data } = await Movies.getCast(film.id);
            setData(data)
            console.log(data);
        })();
    }, []);

    return (
        <>
            <div className='info defail-container'>
                <div className="genres">
                    <p>
                        genres: <span>action, mistery, horror</span>
                    </p>
                </div>

                <div className="cast">
                    <p>
                        cast: <span>dicaprio, arnold shwartzeneger, danny devito, miley cirus</span>
                    </p>
                </div>
            </div>
        </>
    )
}
