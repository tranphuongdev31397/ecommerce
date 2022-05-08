import { FacebookFilled, GithubFilled } from '@ant-design/icons';
import Logo from 'components/Logo';
import React from 'react';

function FooterTop() {
    return (
        <div className="flex justify-between">
            <div className="w-1/3">
                <Logo />

                <p className="my-4">
                    Content Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Excepturi, molestiae nobis? Nisi accusamus
                    reprehenderit saepe fugiat deleniti quis minus veniam!
                </p>
            </div>

            <div>
                <p className="font-bold text-xl mb-2">Contact</p>
                <ul>
                    <li className="my-4">
                        <span className="font-bold">Phone Number</span>: (+84)
                        78 87 81 801
                    </li>
                    <li className="my-4">
                        <span className="font-bold">Email</span>:
                        tranphuongdev31397@gmail.com
                    </li>
                    <li className="flex gap-4 justify-center">
                        <span className="facebook text-2xl">
                            <a
                                href="https://www.facebook.com/phuongdev31397/"
                                target={'_blank'}
                            >
                                <FacebookFilled />
                            </a>
                        </span>
                        <span className="facebook text-2xl">
                            <a
                                href="https://github.com/tranphuongdev31397"
                                target="_blank"
                            >
                                <GithubFilled />
                            </a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default FooterTop;
