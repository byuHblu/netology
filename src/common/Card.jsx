import React from "react";
import Button from "./Button";
import "../index.css";

const Card = () => {
  return (
    <div className="card">
      <Button
        text={"Бесплатный гайд"}
        onClick={() => alert("Бесплатный гайд получен")}
        className={"button"}
      />

      <p className="card__text">
        Получите бесплатный гайд по&nbsp;искусственному интеллекту, который
        поможет улучшить работу графического дизайнера
      </p>
    </div>
  );
};

export default Card;
