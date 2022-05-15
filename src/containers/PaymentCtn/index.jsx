import React from 'react';
import PaymentInfor from './PaymentInfor';
import PaymentMethod from './PaymentMethod';

function PaymentCtn() {
    return (
        <div className="container payment__container mx-auto my-10 w-full h-full">
            <div className="flex flex-col lg:flex-row border border-solid rounded-lg shadow-lg h-full overflow-hidden w-full">
                <div className="w-full lg:w-2/3 h-full p-0 border-r border-solid text-black">
                    <PaymentInfor />
                </div>
                <div className="w-full lg:w-1/3 h-full border-t-2 lg:border-t-0 text-black rounded-sm">
                    <PaymentMethod />
                </div>
            </div>
        </div>
    );
}

export default PaymentCtn;
