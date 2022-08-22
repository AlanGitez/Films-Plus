import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs"
import { BsPersonBoundingBox } from "react-icons/bs"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import UserMenu from '../UserMenu'


export default function Menu() {
    const [showOptions, setShowOptions] = useState(false);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    return (
        <>
            <div className="menu">
                <ul className="nav-list">
                    <li className="item">Movies</li>
                    <li className="item">Series</li>
                    <li className="item">Favorites</li>
                </ul>

                <ul className="user-list">
                    <li className='item'>{<BsSearch className='icon-search' />}</li>

                    {user.id ?
                        <>
                            <li className='icon-me-item item'>
                                {<BsPersonBoundingBox
                                    className='icon-me'
                                    onClick={() => setShowOptions(!showOptions)} />}

                                {showOptions && <UserMenu />}

                            </li>
                        </> :
                        <>
                            <li className="item">Sign up</li>
                            <li className="item"
                                onClick={() => { navigate("/register") }}>Sign in</li>

                        </>}
                </ul>
            </div>

        </>
    )
}
