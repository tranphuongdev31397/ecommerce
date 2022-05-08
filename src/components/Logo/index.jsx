import { ShoppingFilled } from '@ant-design/icons';
import React from 'react';

function Logo() {
    return (
        <div className="logo flex items-center">
            {/* LOGO HERE */}
            <ShoppingFilled className="text-5xl text-sky-500 mr-2" />
            <div>
                <span className="text-sky-500 text-2xl">MP</span>
                <span className="text-2xl">Shopping</span>
                <p className="uppercase">Your Shopping Partner</p>
            </div>
        </div>
    );
}

export default Logo;
