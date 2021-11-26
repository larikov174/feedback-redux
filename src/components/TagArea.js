import React from "react";

export const TagArea = () => {
  const tagNames = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const renderBtns = tagNames.map((name) => (
    <button className="tag-item tag-item_place_menu" key={name} type="button">
      {name}
    </button>
  ));

  return (
    <nav className="tag-area ">
      <div className="tag-area__container">{renderBtns}</div>
    </nav>
  );
};
