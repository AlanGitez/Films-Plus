import React from 'react'

import UserList from './UserMenu';

export default function Menu() {
    return (
        <>
            <div className="menu">
                <ul className="nav-list">
                    <li className="item">Movies</li>
                    <li className="item">Series</li>
                    <li className="item">Favorites</li>
                </ul>
                <UserList />
            </div>

        </>
    )
}
