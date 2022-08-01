import React from 'react'
import logo from "../../images/logo.png"
import { BsPersonBoundingBox } from "react-icons/bs"

export default function Navbar() {
    return (
        <>
            <header className='navbar'>
                <div className='logo-container'>
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className='nav-menu'>
                    <div className="burger-menu">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="menu">
                        <ul className="list">
                            <li className="item">Movies</li>
                            <li className="item">Series</li>
                            <li className="item">Favorites</li>
                            <li className='item'>{<BsPersonBoundingBox className='icon-me' />}</li>
                        </ul>
                    </div>

                </div>
            </header>
        </>
    )
}
