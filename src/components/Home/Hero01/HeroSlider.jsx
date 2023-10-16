import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./styles.scss";

export const HeroSlider = (props) => {
  const { image01, image02, image03, image04, content } = props;
  return (
    <section className="hero-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        // pagination={{ clickable: true }}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={false}
        spaceBetween={0}
        slidesPerView={'auto'}
        className="swiper"
      >
        <SwiperSlide>{image01}</SwiperSlide>
        <SwiperSlide>{image02}</SwiperSlide>
        <SwiperSlide>{image03}</SwiperSlide>
        <SwiperSlide>{image04}</SwiperSlide>
      </Swiper>
      <div className="overlay"></div>
      <div className="hero-content">{content}</div>
    </section>
  );
};
