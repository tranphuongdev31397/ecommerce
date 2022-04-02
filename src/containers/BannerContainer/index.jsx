import Banner from 'components/Banner';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { banners } from 'common/data';
function BannerContainer() {
    return (
        <Swiper
            style={{ height: '432px' }}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {banners.length != 0 &&
                banners.map((banner) => {
                    return (
                        <SwiperSlide key={banner.id}>
                            <Banner banner={banner} />
                        </SwiperSlide>
                    );
                })}
        </Swiper>
    );
}
export default BannerContainer;
