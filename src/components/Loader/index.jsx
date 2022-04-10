import { Spin } from 'antd';
import React from 'react';

export default function Loader() {
    return (
        <>
            <div className="absolute w-full bg-white h-full top-0 left-0 z-50">
                <Spin
                    size="large"
                    className="z-50 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </>
    );
}
