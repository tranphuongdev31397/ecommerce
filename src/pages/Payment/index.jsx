import { message } from 'antd';
import PageBanner from 'components/PageBanner';
import { PATH_IMG } from 'constant';
import PaymentCtn from 'containers/PaymentCtn';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const { order, personal } = useSelector(
        (state) => state.checkOutReducer.paymentInformation
    );
    const navigate = useNavigate();
    useEffect(() => {
        if (order.cart.length === 0 || !personal) {
            message.warn('Please Checkout your Order first!');
            navigate('/checkout');
        }
    }, []);

    return (
        <>
            <PageBanner
                titlePage={'Payment'}
                bgImg={PATH_IMG + 'pageBanner.jpg'}
            />
            <PaymentCtn />
        </>
    );
}

export default PaymentPage;
