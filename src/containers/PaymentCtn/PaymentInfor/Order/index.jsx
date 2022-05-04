import { Tag } from 'antd';
import { randomColor } from 'common/functions';
import React from 'react';
import { useSelector } from 'react-redux';

function Order() {
    const customerOrder = useSelector(
        (state) => state.checkOutReducer.paymentInformation.order
    );

    return (
        <>
            <div className="border-b-2 border-t-2">
                {customerOrder.cart.map((item, idx) => {
                    return (
                        <>
                            <div
                                className=" flex justify-start items-center gap-5 border-t  my-2 p-2 relative"
                                style={{
                                    borderTopWidth: idx === 0 ? 0 : '1px'
                                }}
                                key={item.id}
                            >
                                <div className="cartBox__img w-1/4 h-20  my-3">
                                    <img
                                        src={item.image}
                                        alt="imgCartBox"
                                        className="object-center object-contain w-full h-full"
                                    />
                                </div>
                                <div className="cartBox__content w-3/4 flex flex-col text-left h-full justify-center">
                                    <div className="w-full h-full">
                                        <h4 className="font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
                                            {item.title}
                                        </h4>
                                        <p>$ {item.price}</p>
                                        <p>x {item.quality}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>

            <div className="w-full border-b-2">
                <div className="flex justify-between w-full  p-4">
                    <p className="font-bold">Sub Total</p>
                    <p>{customerOrder.subTotal}$</p>
                </div>
                <div className="flex justify-between w-full  p-4">
                    <p className="font-bold">Discount</p>
                    <p>
                        {customerOrder.couponArr.map((item, idx) => {
                            return (
                                <Tag
                                    color={randomColor()}
                                    className="relative tag__coupon w-10"
                                >
                                    <div className="">
                                        <p>
                                            {item.discountType === 'percent'
                                                ? '-' +
                                                  item.discount * 100 +
                                                  '%'
                                                : item.discountType ===
                                                  'deduction'
                                                ? '-' + item.discount + '$'
                                                : ''}
                                        </p>
                                    </div>
                                </Tag>
                            );
                        })}
                    </p>
                </div>
            </div>
            <div>
                <div className="flex justify-between w-full  p-4">
                    <p className="font-bold">Total</p>
                    <p>{customerOrder.total}$</p>
                </div>
            </div>
        </>
    );
}

export default Order;
