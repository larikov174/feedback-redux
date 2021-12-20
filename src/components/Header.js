import React, { useState } from "react";
import { Hamburger } from "./Hamburger";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => {
    console.log('click');
    setIsVisible(!isVisible);
  }

  return (
    <>
    <header className="header">
      <h1 className="header__title">Frontend Mentor</h1>
      <h2 className="header__subtitle">Feedback Board</h2>
      <button className="header__hamburger-button" onClick={handleClick}></button>
    </header>
      <Hamburger visibility={isVisible} />
    </>
  );
};
