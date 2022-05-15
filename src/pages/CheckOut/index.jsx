import PageBanner from 'components/PageBanner';
import { PATH_IMG } from 'constant';
import CheckOutLeftSide from 'containers/CheckOutLeftSide';
import CheckOutRightSide from 'containers/CheckOutRightSide';
import React, { useEffect, useState } from 'react';

function CheckOut() {
    return (
        <>
            <PageBanner
                titlePage={'Checkout'}
                bgImg={PATH_IMG + 'pageBanner.jpg'}
            />
            <div className="checkOut__container flex flex-col-reverse sm:flex-row flex-start justify-between container px-10 sm:px-0 mx-auto gap-6 my-10 ">
                <div className="checkOut__leftSide w-full sm:w-2/3">
                    <CheckOutLeftSide />
                </div>
                <div className="checkOut__rightSide w-full sm:w-1/4">
                    <CheckOutRightSide />
                </div>
            </div>
        </>
    );
}

export default CheckOut;
