import React from "react";

export const DropMenu = ({ isVisible }) => {
  const tagNames = ["Most Upvotes", "Least Upvote", "Most Comments", "Least Comments"];
  const renderList = tagNames.map((name) => (
    <li className="drop-menu__item" key={name}>
      <span className="drop-menu__text">{name}</span>
      <span className="drop-menu__icon drop-menu__icon_active"></span>
    </li>
  ));

  return (
    <ul className={`drop-menu ${isVisible ? 'drop-menu_visible' : ''}`}>{renderList}</ul>
  )
}
