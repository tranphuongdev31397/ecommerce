import { PATH_IMG } from 'constant';
import React from 'react';

function NotSupport() {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full ">
                <img
                    src={PATH_IMG + 'notSpImg.png'}
                    alt="notSpImg"
                    className="w-full h-full object-cover object-center absolute"
                />
                <div className="absolute top-3/4 w-full text-center z-10 font-bold text-xl text-white">
                    <p>We are really sorry!</p>
                    <p>
                        Website not available on Mobile yet. We will update
                        soon.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotSupport;
