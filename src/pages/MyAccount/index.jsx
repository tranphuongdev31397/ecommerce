import { message, notification } from 'antd';
import { auth } from 'config/firebase/firebase';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';
import PageBanner from 'components/PageBanner';
import { PATH_IMG } from 'constant';
import MyAccountCtn from 'containers/MyAccountCtn';

function MyAccount() {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return <Loader />;
        }
        if (!user) {
            message.warn('Please login to use this function!');

            navigate('/');
        }
    }, [user, loading]);

    return (
        <>
            <PageBanner
                titlePage={'My Account'}
                bgImg={PATH_IMG + 'pageBanner.jpg'}
            />

            <div className="myAccount container mx-auto">
                <MyAccountCtn />
            </div>
        </>
    );
}

export default MyAccount;
