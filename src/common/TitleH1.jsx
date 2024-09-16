import React from "react";
import "../index.css";

const TitleH1 = ({ textTitle, textSpan }) => {
  return (
    <div className="text__main">
      <h1 className="text__title">{textTitle}</h1>
      <span className="text__span">{textSpan}</span>
    </div>
  );
};

export default TitleH1;
