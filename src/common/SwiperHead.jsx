import React from "react";
import TitleH2 from "./TitleH2";
import Button from "./Button";
import "../index.css";

const SwiperHead = () => {
  return (
    <div className="swiper__header">
      <Button
        text={"Библиотека"}
        onClick={() => alert("Библиотека открыта")}
        className={"button"}
      />

      <TitleH2 text={"Рандомные стили"} />
    </div>
  );
};

export default SwiperHead;
