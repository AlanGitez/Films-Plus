import React, { useState } from 'react'
import { BsPersonBoundingBox } from "react-icons/bs"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import UserMenu from '../UserMenu'
import Search from './Search';

export default function UserList() {
    const [showOptions, setShowOptions] = useState(false);
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    return (
        <>
            <ul className="user-list">
                <div className="search-container">
                    <li className='item'>
                        <Search />
                    </li>
                </div>

                {user?.id ?
                    <>
                        <li className='icon-me-item item'>
                            {<BsPersonBoundingBox
                                className='icon-me'
                                onClick={() => setShowOptions(!showOptions)} />}

                            {showOptions && <UserMenu />}

                        </li>
                    </> :
                    <>
                        <li className="item"
                            onClick={() => { navigate("/login") }}>Sign up</li>
                        <li className="item"
                            onClick={() => { navigate("/register") }}>Register</li>
                    </>}
            </ul>
        </>
    )
}
