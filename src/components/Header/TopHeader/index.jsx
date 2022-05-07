import React, { useEffect, useState } from 'react';
import { PhoneFilled } from '@ant-design/icons';
import DropdownHeader from 'components/Dropdown/DropdownHeader';
import Flags from 'country-flag-icons/react/3x2';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'config/firebase/firebase';
import { logout } from 'config/firebase/firebase-function';
import { useDispatch } from 'react-redux';
import { actSetCurrentUser } from 'slices/authSlice';
import { actSetCartUser } from 'slices/cartSlice';

function TopHeader() {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        dispatch(actSetCurrentUser({}));
        dispatch(actSetCartUser([]));
        navigate('/');
    };
    return (
        <>
            <div className="w-100 border-b-gray-100 border-b-2">
                <div className="container mx-auto flex justify-between">
                    <div className="flex">
                        <div className="p-2 border-r-2 border-gray-100">
                            <DropdownHeader
                                menuArr={[
                                    {
                                        title: 'ENG',
                                        icon: (
                                            <Flags.US className="mr-2 ant-dropdown-menu-item-icon w-3" />
                                        )
                                    },
                                    {
                                        title: 'VIE',
                                        icon: (
                                            <Flags.VN className="mr-2 ant-dropdown-menu-item-icon w-3" />
                                        )
                                    }
                                ]}
                            />
                        </div>
                        <div className="p-2 border-r-2 border-gray-100">
                            <DropdownHeader
                                menuArr={[{ title: 'USD' }, { title: 'VND' }]}
                            />
                        </div>
                        <div className="p-2 border-r-2 border-gray-100">
                            <a
                                href="tel: +84788781801"
                                className="flex items-center"
                            >
                                <PhoneFilled className="mr-1" />
                                +84 78 87 81 801
                            </a>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="p-2 border-r-2 border-gray-100">
                            {user ? (
                                <Link to="/my-account">My Account</Link>
                            ) : (
                                <></>
                            )}
                        </div>

                        <div className="p-2 border-r-2 border-gray-100">
                            <Link to="/checkout">Check out</Link>
                        </div>

                        {!user ? (
                            <div className="p-2 border-r-2 border-gray-100">
                                <Link to="/register">Register</Link>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="p-2 border-r-2 border-gray-100">
                            {!user ? (
                                <Link to="/login">Log in</Link>
                            ) : (
                                <span
                                    className="cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Log out
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopHeader;
