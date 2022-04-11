import { Button, Form, Input, message, Space } from 'antd';
import { actAddCoupon } from 'pages/CheckOut/checkOutSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Coupon() {
    const { couponArr, error } = useSelector((state) => state.checkOutReducer);

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const onFinish = (value) => {
        dispatch(actAddCoupon(value.couponCode));
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    console.log(error);
    console.log(couponArr);
    return (
        <div>
            <div className="my-2 border-2 p-2">
                Test Coupon Code:
                <p>freeship01(type: freeShip)</p>
                percent20(typeCode:testpercent)
                <p></p>
            </div>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateTrigger={error}
                autoComplete="off"
            >
                <Form.Item name="couponCode" label="COUPON">
                    <Input placeholder="Coupon Code" />
                </Form.Item>
                <Form.ErrorList
                    className="text-red-500 mb-2"
                    errors={[error]}
                />
                <Form.Item>
                    <Space>
                        <Button
                            type="primary"
                            className="bg-sky-500 hover:bg-white hover:text-black"
                            htmlType="submit"
                        >
                            ADD COUPON
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Coupon;
