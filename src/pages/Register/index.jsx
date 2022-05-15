import { notification } from 'antd';
import Loader from 'components/Loader';
import { auth } from 'config/firebase/firebase';
import RegisterCtn from 'containers/Register';
import React, { useEffect, useLayoutEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return <Loader />;
        } else if (user) {
            notification.warn({
                message: 'Please log out if you want to register a new account',
                placement: 'bottomRight'
            });
            navigate('/');
        }
    }, [user, loading]);

    return (
        <div
            style={{ background: '#d9edff', width: '100vw', height: '100vh' }}
            className="flex justify-center items-center overflow-hidden"
        >
            <div className="my-10 mx-4">
                <RegisterCtn />
            </div>
            <div className="absolute top-4 left-4">
                <Link to="/" className="uppercase text-black text-lg">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default RegisterPage;
