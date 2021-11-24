import React from "react";
import { Link } from "react-router-dom";

export const ControlBar = () => {
  const tagNames = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const renderLis = tagNames.map((name) => (
    <li key={name} className="drop-menu__item" data-id="Most Upvotes">
      <span className="drop-menu__text">{name}</span>
      <span className="drop-menu__icon drop-menu__icon_active"></span>
    </li>
  ));
  return (
    <section className="control-bar">
      <header className="header-main">
        <div className="header-main__icon"></div>
        <div className="header-main__title"></div>
        <p className="header-main__sort-unit">
          Sort by&nbsp;:&nbsp;
          <span className="header-main__sort-text">Most Upvotes</span>
          <span className="header-main__sort-arrow"></span>
          <ul className="drop-menu hide">{renderLis}</ul>
        </p>
        <Link to="/" className="button button_add button_place_header-main">
          &#43; Add Feedback
        </Link>
      </header>
      <div className="feed-cards"></div>
    </section>
  );
};
