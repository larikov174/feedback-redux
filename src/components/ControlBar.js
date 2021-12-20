import React from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { Posts } from "../atoms/Atoms";

export const ControlBar = () => {
  const posts = useAtom(Posts);
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
      <div className="control-bar__title">{posts[0].length} Suggestions</div>
      <Link
        to="/add"
        className="button button_submit button_place_control-bar"
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
