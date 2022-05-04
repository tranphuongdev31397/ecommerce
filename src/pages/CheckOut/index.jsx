import PageBanner from 'components/PageBanner';
import { PATH_IMG } from 'constant';
import CheckOutLeftSide from 'containers/CheckOutLeftSide';
import CheckOutRightSide from 'containers/CheckOutRightSide';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function CheckOut() {
    return (
        <>
            <PageBanner
                titlePage={'Checkout'}
                bgImg={PATH_IMG + 'pageBanner.jpg'}
            />
            <div className="checkOut__container flex flex-start justify-between container mx-auto gap-6 my-10">
                <div className="checkOut__leftSide w-2/3">
                    <CheckOutLeftSide />
                </div>
                <div className="checkOut__rightSide w-1/4">
                    <CheckOutRightSide />
                </div>
            </div>
        </>
    );
}

export default CheckOut;
