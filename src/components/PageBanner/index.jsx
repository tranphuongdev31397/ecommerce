import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
function PageBanner({ bgImg, titlePage }) {
    return (
        <div className="w-full h-80 relative z-0">
            <div className="z-0 w-full h-full  after:top-0 after:left-0 after:absolute after:content-[' '] after:w-full after:h-full after:opacity-40 after:bg-black">
                <img
                    src={bgImg}
                    alt="pageBannerImg"
                    className="object-center object-cover w-full h-full"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 ">
                    <div>
                        <Breadcrumb className="text-2xl font-extrabold text-white bannerPage__breadcrumb">
                            <Breadcrumb.Item className="text-white">
                                <Link to="/" className="">
                                    <span className="align-middle">
                                        <HomeOutlined className="text-2xl mr-2 text-white align-top" />
                                        Home
                                    </span>
                                </Link>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item className="font-bold !text-sky-300">
                                {titlePage}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PageBanner;
