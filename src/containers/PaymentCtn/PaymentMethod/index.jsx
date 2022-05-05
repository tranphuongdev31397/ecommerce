import {
    CarOutlined,
    CreditCardOutlined,
    WalletOutlined
} from '@ant-design/icons';
import PaymentOptions from 'components/PaymentOption';
import PaymentCOD from 'components/PaymentOption/PaymentCOD';
import React from 'react';

function PaymentMethod() {
    const options = [
        {
            icon: <CarOutlined className="mr-2" />,
            title: 'Cash on Delivery',
            content: <PaymentCOD />,
            value: 'COD'
        },
        {
            icon: <CreditCardOutlined className="mr-2" />,
            title: 'Pay by Card',
            content: 'Component1',
            value: 'payByCard'
        }
    ];
    return (
        <>
            <div className="border-b divide-solid py-3 ">
                <div className="text-center icon-center ">
                    <WalletOutlined className="mr-2" />
                    PAYMENT METHOD
                </div>
            </div>
            <div className="w-full h-full">
                <PaymentOptions options={options} />
            </div>
        </>
    );
}

export default PaymentMethod;
