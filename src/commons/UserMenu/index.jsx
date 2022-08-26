import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../state/User/User';

export default function UserMenu() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = () => {
        dispatch(logout({ id: user.id }));
    }
    return (
        <>
            <div className="usermenu-container">
                <nav className="user-menu">
                    <ul className="usermenu-list">
                        <li
                            className="usermenu-list-item"
                            onClick={() => navigate("/profile")}>
                            Profile
                        </li>
                        <li className="usermenu-list-item">
                            Some bug?
                        </li>
                        <hr />
                        <li
                            className="user-menu-list-item"
                            onClick={() => {
                                handleLogout();
                                navigate("/");
                            }}>
                            Logout
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
