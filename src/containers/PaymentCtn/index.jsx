import React from 'react';
import PaymentInfor from './PaymentInfor';

function PaymentCtn() {
    return (
        <div className="container payment__container mx-auto my-10 w-full h-full">
            <div className="flex border border-solid rounded-lg shadow-lg h-full overflow-hidden w-full">
                <div className="w-2/3 h-auto p-0 border-r border-solid text-black">
                    <PaymentInfor />
                </div>
                <div className="w-1/3 h-auto bg-sky-500 text-white"></div>
            </div>
        </div>
    );
}

export default PaymentCtn;
