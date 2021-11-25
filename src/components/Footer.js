import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <span className="footer__text">Challenge by </span>
        <a
          className="footer__link"
          href="https://www.frontendmentor.io?ref=challenge"
          target="noreferrer"
        >
          &nbsp;Frontend&nbsp;Mentor
        </a>
      </div>
      <div>
        <span className="footer__text">. Coded by</span>
        <a
          className="footer__link"
          href="https://github.com/larikov174"
          target="noreferrer"
        >
          &nbsp;Andrey&nbsp;Larikov.
        </a>
      </div>
    </footer>
  );
};
