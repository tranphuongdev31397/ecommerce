import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MobileMenu({ user, onLogOut }) {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                type="link"
                className="flex justify-center items-center"
                onClick={showDrawer}
            >
                <MenuOutlined className="text-xl" />
            </Button>
            <Drawer
                title="Menu"
                placement="right"
                onClose={onClose}
                visible={visible}
            >
                <ul>
                    {' '}
                    {user ? (
                        <li className="my-2">
                            <Link to="/my-account">My Account</Link>
                        </li>
                    ) : (
                        <></>
                    )}
                    <li className="my-2">
                        {' '}
                        <Link to="/checkout">Check out</Link>
                    </li>
                    <li className="my-2">
                        {!user ? <Link to="/register">Register</Link> : <></>}
                    </li>
                    <li className="my-2">
                        {!user ? (
                            <Link to="/login">Log in</Link>
                        ) : (
                            <span className="cursor-pointer" onClick={onLogOut}>
                                Log out
                            </span>
                        )}
                    </li>
                </ul>
            </Drawer>
        </>
    );
}

export default MobileMenu;
