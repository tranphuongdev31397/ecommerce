import React, { useState } from 'react';
import './style.scss';

function ImageZoom({ image }) {
    const [imgPosition, setImgPosition] = useState('0% 0%');
    const [zoomShow, setZoomShow] = useState(false);

    const handleMouseMove = (e) => {
        //Get position when mouseMove into image
        //client X, clientY =  positionX , positionY of cursor into browser , vị trí của con trỏ trong trình duyệt tính từ lề trái và trên
        //left top  is position of element into page, vị trí của element so với trang web tính từ lề trái và trên xuống
        //width, height kích thước của element
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setImgPosition(`${x}% ${y}%`);
    };
    return (
        <figure className="imageZoom z-1 relative w-full h-full cursor-zoom-in">
            <img
                src={image}
                alt="productImg"
                className="object-fit object-center w-full h-full"
                onMouseOver={() => setZoomShow(true)}
                onMouseOut={() => setZoomShow(false)}
                onMouseMove={handleMouseMove}
            />
            {zoomShow && (
                <div
                    className="imageZoom__box"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: imgPosition
                    }}
                ></div>
            )}
        </figure>
    );
}
export default ImageZoom;
