import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import SwiperSlideContainer from "./SwiperSlideContainer";
import "swiper/css";
import "swiper/css/navigation";

const SwiperWrapper = () => {
  return (
    <Swiper
      modules={[Navigation, Grid]}
      spaceBetween={14}
      slidesPerView={3}
      navigation
      grid
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SwiperSlideContainer
          img={require("../assets/images/SliderImg1.jpg")}
          title={"Fashion ракурсы"}
          text={
            "Откройте для себя секреты создания уникальных fashion ракурсов с помощью Midjourney. Мы расскажем, как подобрать идеальный стиль, позу и атмосферу."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContainer
          img={require("../assets/images/SliderImg2.jpg")}
          title={"3D объекты"}
          text={
            "Научитесь создавать впечатляющие 3D объекты с помощью Midjourney. Узнайте, как воплотить свои идеи в трехмерной форме и придать вашим проектам реалистичность."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContainer
          img={require("../assets/images/SliderImg3.jpg")}
          title={"Фоновые изображения"}
          text={
            "Погрузитесь в мир создания фоновых изображений с Midjourney. Узнайте, как подобрать идеальный фон для ваших проектов, чтобы подчеркнуть стиль."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContainer
          img={require("../assets/images/SliderImg4.jpg")}
          title={"Портреты"}
          text={
            "Откройте для себя искусство создания портретов с Midjourney. Узнайте, как передать эмоции, характер и стиль персонажа, создавая уникальные образы."
          }
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContainer
          img={require("../assets/images/SliderImg5.jpg")}
          title={"Персонажи"}
          text={
            "Создавайте захватывающих персонажей с помощью Midjourney. Узнайте, как воплотить в жизнь уникальные образы, придавая им характер и индивидуальность."
          }
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperWrapper;
