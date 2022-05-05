import React from 'react';
import PaymentInfor from './PaymentInfor';
import PaymentMethod from './PaymentMethod';

function PaymentCtn() {
    return (
        <div className="container payment__container mx-auto my-10 w-full h-full">
            <div className="flex border border-solid rounded-lg shadow-lg h-full overflow-hidden w-full">
                <div className="w-2/3 h-full p-0 border-r border-solid text-black">
                    <PaymentInfor />
                </div>
                <div className="w-1/3 h-full  text-black rounded-sm">
                    <PaymentMethod />
                </div>
            </div>
        </div>
    );
}

export default PaymentCtn;
