import { Button, Modal, notification } from 'antd';
import { PATH_IMG } from 'constant';
import useClearInfo from 'hooks/useClearInfo';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentCOD() {
    const clearInfo = useClearInfo();
    const navigate = useNavigate();
    const [duration, setDuration] = useState(3);
    function success() {
        Modal.success({
            content: 'Order successfully, thank you for choosing us',
            onOk() {
                notification['success']({
                    message: `You will automatically direct to the homepage after ${duration} seconds`,
                    duration: 3,
                    placement: 'bottomRight',
                    onClose() {
                        clearInfo();
                        navigate('/');
                    }
                });
            }
        });
    }
    return (
        <div className="w-full h-auto flex flex-col justify-between">
            <div className="flex justify-center items-center my-14">
                <img
                    src={PATH_IMG + 'codImage.jpeg'}
                    alt="cod"
                    className="object-cover object-center w-3/4 h-auto"
                />
            </div>
            <Button className="w-full" onClick={success}>
                PAYMENT
            </Button>
        </div>
    );
}

export default PaymentCOD;
