import React from "react";
import { Link } from "react-router-dom";

export const ControlBar = ({ cards }) => {
  const tagNames = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const renderLis = tagNames.map((name) => (
    <li key={name} className="control-bar__drop-menu-item">
      <div className="control-bar__drop-menu-text">{name}</div>
      <div className="control-bar__drop-menu-icon" />
    </li>
  ));

  return (
    <section className="control-bar">
      <div className="control-bar__icon" />
      <div className="control-bar__title">{cards.length} Suggestions</div>
      <Link
        to="/"
        className="button button_submit button_submit_place_control-bar"
      >
        &#43; Add Feedback
      </Link>
      <nav className="control-bar__sort-unit">
        Sort by&nbsp;:&nbsp;
        <span className="control-bar__sort-text">Most Upvotes</span>
        <div className="control-bar__sort-arrow" />
      </nav>
      <ul className="control-bar__drop-menu">{renderLis}</ul>
    </section>
  );
};
