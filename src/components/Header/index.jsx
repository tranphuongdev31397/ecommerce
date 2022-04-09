import React from 'react';
import MenuTab from './MenuTab';
import MiddleHeader from './MiddleHeader';
import TopHeader from './TopHeader';

function Header() {
    return (
        <>
            <div className="w-100 header">
                <TopHeader />
                <MiddleHeader />
            </div>
            <div className="w-full navigation bg-sky-500 px-4">
                <MenuTab />
            </div>
        </>
    );
}
export default Header;
