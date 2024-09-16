import React from "react";
import "../index.css";

const Description = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

export default Description;
