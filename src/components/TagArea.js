import React from "react";
import { NavLink } from "react-router-dom";

export const TagArea = () => {
  const tags = [
    { title: "All", path: "/category/all" },
    { title: "UX", path: "/category/ux" },
    { title: "UI", path: "/category/ui" },
    { title: "Enhancement", path: "/category/enhancement" },
    { title: "Bug", path: "/category/bug" },
    { title: "Feature", path: "/category/feature" }
  ];
  const renderBtns = tags.map((tag) => (
    <NavLink to={tag.path} className={({ isActive }) => `tag-item tag-item_place_menu ${isActive ? 'tag-item_active' : ''}`} key={tag.title} onClick={(e) => console.log(e.target)}>
      {tag.title}
    </NavLink>

  ));

  return (
    <nav className="tag-area__container">{renderBtns}</nav>
  );
};
