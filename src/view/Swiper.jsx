import React from "react";
import SwiperHead from "../common/SwiperHead";
import SwiperWrapper from "../common/SwiperWrapper";
import "../index.css";

const Swiper = () => {
  return (
    <div className="main__swiper">
      <SwiperHead />

      <SwiperWrapper />
    </div>
  );
};

export default Swiper;
