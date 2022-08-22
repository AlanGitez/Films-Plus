import React, { useState } from 'react'
import UserMenu from '../UserMenu'

export default function BurgerMenu() {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <>
            <div
                className="burger-menu"
                onClick={() => setShowOptions(!showOptions)}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                {showOptions && <UserMenu />}

            </div>
        </>
    )
}
