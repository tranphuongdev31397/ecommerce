import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, Col, Empty, Row, Tag } from 'antd';
import { randomColor } from 'common/functions';
import {
    actDeleteCoupon,
    actSetOrderInformation
} from 'pages/CheckOut/checkOutSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.scss';
function CheckOutRightSide() {
    const cart = useSelector((state) => state.cartReducer.cart);
    const couponArr = useSelector((state) => state.checkOutReducer.couponArr);
    const personalInformation = useSelector(
        (state) => state.checkOutReducer.paymentInformation?.personal
    );
    const payment = useSelector(
        (state) => state.checkOutReducer.paymentInformation
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const subTotal = cart.reduce((prev, current) => {
        return prev + current.quality * current.price;
    }, 0);
    let percent = couponArr?.find(
        (item) => item.discountType === 'percent'
    )?.discount;
    percent = percent === undefined ? 0 : percent;
    let deduction = couponArr?.find(
        (item) => item.discountType === 'deduction'
    )?.discount;
    deduction = deduction === undefined ? 0 : deduction;

    let total = subTotal - subTotal * percent - deduction;
    const orderResult = {
        cart,
        couponArr,
        total,
        subTotal
    };
    const handleSetOrder = () => {
        dispatch(actSetOrderInformation(orderResult));
        navigate('/payment');
    };

    return (
        <div className="flex flex-col justify-center w-full">
            <h2 className="text-xl font-bold text-sky-500">Order Sumary</h2>

            {Array.isArray(cart) && cart.length === 0 ? (
                <Empty className="my-6" />
            ) : (
                <Row gutter={[0, 0]} className="w-full my-6">
                    <Col
                        className="border-2 border-black p-2 w-full font-bold"
                        span={12}
                    >
                        Product
                    </Col>
                    <Col
                        className="border-2 border-black p-2 border-l-0 font-bold"
                        span={12}
                    >
                        Price
                    </Col>
                    {cart.map((item, idx) => {
                        return (
                            <React.Fragment key={item.id} className="w-full">
                                <Col
                                    className="border-2 border-black border-t-0 p-2 w-full"
                                    span={12}
                                >
                                    <p className="overflow-hidden whitespace-nowrap text-ellipsis w-full">
                                        {' '}
                                        {item.title}{' '}
                                    </p>
                                </Col>
                                <Col
                                    className="border-2 border-black  border-t-0 p-2 border-l-0"
                                    span={12}
                                >
                                    {item.price}$ x {item.quality}
                                </Col>
                            </React.Fragment>
                        );
                    })}
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0 text-sky-500"
                    >
                        Sub Total
                    </Col>
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0 border-l-0 text-sky-500"
                    >
                        {' '}
                        {subTotal}$
                    </Col>
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0"
                    >
                        Coupon
                    </Col>
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0 border-l-0"
                    >
                        {Array.isArray(couponArr) &&
                            couponArr.map((item, idx) => {
                                return (
                                    <Tag
                                        color={randomColor()}
                                        className="relative tag__coupon w-10"
                                    >
                                        <span className="tag__coupon-content">
                                            {item.discountType === 'percent'
                                                ? '-' +
                                                  item.discount * 100 +
                                                  '%'
                                                : item.discountType ===
                                                  'deduction'
                                                ? '-' + item.discount + '$'
                                                : ''}
                                        </span>
                                        <span
                                            className="tag__coupon-delete text-center"
                                            onClick={() =>
                                                dispatch(
                                                    actDeleteCoupon(item.id)
                                                )
                                            }
                                        >
                                            X
                                        </span>
                                    </Tag>
                                );
                            })}
                    </Col>
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0"
                    >
                        Total
                    </Col>
                    <Col
                        span={12}
                        className="border-2 border-black p-2 w-full font-bold border-t-0 border-l-0"
                    >
                        {total}$
                    </Col>
                </Row>
            )}

            <Button
                type="primary"
                className="bg-sky-500 hover:bg-white hover:text-black"
                disabled={
                    !personalInformation ||
                    (Array.isArray(cart) && cart.length === 0)
                }
                onClick={handleSetOrder}
            >
                Payment
            </Button>
        </div>
    );
}

export default CheckOutRightSide;
