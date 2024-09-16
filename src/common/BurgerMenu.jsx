import React, { useState } from "react";
import Button from "./Button";
import "../index.css";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div
        className="burger-menu"
        onClick={toggleMenu}
      >
        <div className={`line ${isMenuOpen ? "open" : ""}`}></div>
      </div>

      <Button
        className="button"
        onClick={toggleMenu}
        text={"Меню"}
      />

      {isMenuOpen && (
        <nav className="nav">
          <ul>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Миссия</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;
