import { ShoppingCartOutlined, ShoppingFilled } from '@ant-design/icons';
import React from 'react';
import { Avatar, Badge, Input, Space } from 'antd';

function MiddleHeader({ itemCount = 0 }) {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);
    return (
        <>
            <div className="flex justify-between container mx-auto items-center p-4">
                <div className="header__logo flex items-center">
                    {/* LOGO HERE */}
                    <ShoppingFilled className="text-5xl text-sky-500 mr-2" />
                    <div>
                        <span className="text-sky-500 text-2xl">MP</span>
                        <span className="text-2xl">Shopping</span>
                        <p className="uppercase">Your Shopping Partner</p>
                    </div>
                </div>
                <div className="header__search w-1/3">
                    <Space direction="vertical" className="w-full">
                        <Search
                            className="w-full"
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                        />
                    </Space>
                </div>
                <div className="header__cart flex flex-col w-fit items-center gap-2">
                    {/* Cart */}
                    <Badge
                        count={itemCount}
                        showZero
                        color="rgb(14 165 233 / 1)"
                    >
                        <ShoppingCartOutlined className="text-sky-500 text-4xl" />
                    </Badge>
                    <span className="uppercase">Shopping Cart</span>
                </div>
            </div>
        </>
    );
}
export default MiddleHeader;