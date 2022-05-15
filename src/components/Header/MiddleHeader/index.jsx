import { ShoppingCartOutlined, ShoppingFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import { Badge, Input, Popover, Space } from 'antd';
import CartBox from './CartBox';
import { useSelector } from 'react-redux';
import Logo from 'components/Logo';

function MiddleHeader() {
    // const { Search } = Input;
    // const onSearch = (value) => console.log(value);

    const cart = useSelector((state) => state.cartReducer.cart);
    return (
        <>
            <div className="flex justify-between container mx-auto items-center p-4">
                <div className="w-content">
                    <Logo />
                </div>
                {/* <div className="header__search w-1/3">
                    <Space direction="vertical" className="w-full">
                        <Search
                            className="w-full"
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                        />
                    </Space>
                </div> */}
                <div className="header__cart flex flex-col w-fit items-center gap-2 mr-2 sm:mr-0">
                    {/* Cart */}
                    <Popover content={<CartBox />}>
                        <Badge
                            count={cart.length}
                            showZero
                            color="rgb(14 165 233 / 1)"
                        >
                            <ShoppingCartOutlined className="text-sky-500 text-3xl sm:text-4xl" />
                        </Badge>
                    </Popover>
                    <span className="uppercase hidden sm:block">
                        Shopping Cart
                    </span>
                </div>
            </div>
        </>
    );
}
export default MiddleHeader;
