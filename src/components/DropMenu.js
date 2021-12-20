import React from "react";

export const DropMenu = () => {
  const tagNames = ["Most Upvotes", "Least Upvote", "Most Comments", "Least Comments"];
  const renderList = tagNames.map((name) => (
    <li className="drop-menu__item" key={name}>
    <span className="drop-menu__text">{name}</span>
    <span className="drop-menu__icon drop-menu__icon_active"></span>
  </li>
  ));

  return (
    <nav className="header-main__sort-unit">Sort by&nbsp;:&nbsp;
      <span className="header-main__sort-text">Most Upvotes</span>
      <span className="header-main__sort-arrow"></span>
      <ul className="drop-menu hide">{renderList}</ul>
    </nav>
  )
}
