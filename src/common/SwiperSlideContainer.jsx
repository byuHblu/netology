import React from "react";
import { SwiperSlide } from "swiper/react";
import "../index.css";

const SwiperSlideContainer = ({ img, title, text }) => {
  return (
    <SwiperSlide>
      <div className="slide__container">
        <div className="slide__img">
          <img
            className="slider__img-link"
            alt={title}
            src={img}
          />
        </div>
        <h3 className="slide__title">{title}</h3>
        <p className="slide__text">{text}</p>
      </div>
    </SwiperSlide>
  );
};

export default SwiperSlideContainer;
