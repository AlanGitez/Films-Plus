import React, { useState } from 'react'
import { useEffect } from 'react';
import { BsSearch } from "react-icons/bs"
import useInput from '../../hooks/useInput';
import { Movies } from '../../services';
import { useDispatch } from 'react-redux';
import { searching } from '../../state/UI/searching';


export default function Search() {
    const dispatch = useDispatch();
    const [isSearch, setIsSearch] = useState(false);
    const searchContent = useInput();

    useEffect(() => {
        isSearch && (async () => {
            const { data } = await Movies.search(searchContent.value);
            console.log({ buesqueda: searchContent.value, data });
            data && dispatch(searching())
        })()
    }, [searchContent.value]);


    return (
        <>
            <div>
                {isSearch && <input type="text" className="search" {...searchContent} />}
                {<BsSearch
                    className='icon-search'
                    onClick={() => setIsSearch(!isSearch)} />}
            </div>
        </>
    )
}
