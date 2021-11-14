import React from "react";

export const TagArea = () => {
  const tagNames = ["All", "UX", "UI", "Enhancement", "Bug", "Feature"];
  const renderLis = tagNames.map((name) => (
    <li key={name}>
      <button class="tag-item tag-item_place_menu tag-item_active">
        {name}
      </button>
    </li>
  ));

  return (
    <nav class="tag-area">
      <ul class="tag-area__container">
        {renderLis}
      </ul>
    </nav>
  );
};
