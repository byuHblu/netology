import React from "react";
import Description from "./Description";
import TitleH2 from "./TitleH2";
import "../index.css";

const Card2 = () => {
  return (
    <div className="card2">
      <Description
        text={"Использование ИИ позволяет значительно сэкономить ресурсы"}
        className={"card2__text-top"}
      />

      <TitleH2 text={"01"} />

      <Description
        text={
          "Нейросетям можно поручить рутинные задачи — сортировку или создание изображений — или реализацию целого проекта. Для этого дизайнеру нужно разбираться в инструментах и их возможностях."
        }
        className={"card2__text-bottom"}
      />
    </div>
  );
};

export default Card2;
