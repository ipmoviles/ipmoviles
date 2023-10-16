import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

export const Slider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        spaceBetween={30}
        slidesPerView={1}
        className="swiper"
      >
        <SwiperSlide>{image01}</SwiperSlide>
        <SwiperSlide>{image02}</SwiperSlide>
        <SwiperSlide>{image03}</SwiperSlide>
        <SwiperSlide>{image04}</SwiperSlide>
      </Swiper>
    </>
  );
};
