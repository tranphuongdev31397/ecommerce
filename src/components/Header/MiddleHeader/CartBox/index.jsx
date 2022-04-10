import { Button, Empty } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';

function CartBox() {
    const cart = useSelector((state) => state.cartReducer.cart);
    let totalPrice = cart.reduce((prev, currentVal) => {
        return Number(prev + currentVal.price * currentVal.quality);
    }, 0);
    console.log(totalPrice);
    return (
        <div className="w-60">
            {cart.length === 0 ? (
                <Empty />
            ) : (
                <>
                    <div className="cartBox__container w-full">
                        {Array.isArray(cart) &&
                            cart.map((item, idx) => {
                                return (
                                    <div
                                        className="cartBox__item flex justify-start items-center gap-5 border-2 my-2 p-2"
                                        key={item.id}
                                    >
                                        <div className="cartBox__img w-2/5 h-20  my-3">
                                            <img
                                                src={item.image}
                                                alt="imgCartBox"
                                                className="object-center object-contain w-full h-full"
                                            />
                                        </div>
                                        <div className="cartBox__content w-3/5 flex flex-col text-left h-full justify-center">
                                            <div className="w-full h-full">
                                                <h4 className="font-bold w-full whitespace-nowrap overflow-hidden text-ellipsis">
                                                    {item.title}
                                                </h4>
                                                <p>$ {item.price}</p>
                                                <p>Quality: {item.quality}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <div className="my-2">Total: {totalPrice} $</div>
                    <Button className="w-full my-2">Check out</Button>
                </>
            )}
        </div>
    );
}

export default CartBox;
