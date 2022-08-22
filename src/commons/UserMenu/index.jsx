import React from 'react'

export default function UserMenu() {
    return (
        <>
            <div className="usermenu-container">
                <nav className="user-menu">
                    <ul className="usermenu-list">
                        <li className="usermenu-list-item">
                            Profile
                        </li>
                        <li className="usermenu-list-item">
                            Some bug?
                        </li>
                        <hr />
                        <li className="user-menu-list-item">
                            Logout
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
