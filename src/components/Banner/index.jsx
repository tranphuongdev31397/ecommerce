import { Button } from 'antd';
import React from 'react';

function Banner({ banner }) {
    //banner is object
    const { bgImage, title, subject, description } = banner;
    return (
        <div class="w-full h-full relative">
            <div className="banner__bg w-full h-full ">
                <img
                    src={bgImage}
                    className="object-cover object-center"
                    alt="bannerImg"
                />
            </div>
            <div class="text-center mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="sales bg-slate-200 text-sky-500 my-4 text-xl p-3 px-6 w-fit mx-auto">
                    {description}
                </div>
                <div className="text-2xl title bg-slate-50 font-bold uppercase my-4 p-3">
                    {subject}
                </div>
                <div className="description text-xl my-4 p-3">{title}</div>

                <Button
                    type="primary"
                    size="large"
                    className="bg-white bg-sky-500:hover text-sm font-bold text-sky-500 text-white:hover"
                >
                    SHOP NOW
                </Button>
            </div>
        </div>
    );
}
export default Banner;
