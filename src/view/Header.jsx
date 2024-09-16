import React from "react";
import Logo from "../common/Logo";
import TitleH1 from "../common/TitleH1";
import Card from "../common/Card";
import Button from "../common/Button";
import BurgerMenu from "../common/BurgerMenu";
import "../index.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <Logo />
        <BurgerMenu />
      </div>
      <div className="header__center">
        <TitleH1
          textTitle={"Как использовать нейросети"}
          textSpan={"в графическом дизайне"}
        />

        <Card />
      </div>

      <Button
        text="Получить гайд"
        onClick={() => alert("Гайд получен")}
        className={"button"}
      />
    </header>
  );
};

export default Header;
