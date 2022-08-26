import React, { Suspense } from 'react'
import { useNavigate } from 'react-router';
import logo from "../../images/logo.png"

const BurgerMenu = React.lazy(() => import('./BurgerMenu'));
const Menu = React.lazy(() => import('./Menu'));

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <header className='navbar'>
                <div className='logo-container'
                    onClick={() => { navigate("/") }}>
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className='nav-menu'>
                    <Suspense>
                        <BurgerMenu />
                        <Menu />
                    </Suspense>
                </div>


            </header>
        </>
    )
}
