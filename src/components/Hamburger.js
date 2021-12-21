import React from "react";
import { TagArea } from "./TagArea";
import { Roadmap } from "./Roadmap";

export const Hamburger = ({ isVisible }) => {
  return (
    <article className={`hamburger ${isVisible ? 'hamburger_visible' : ''}`}>
      <div className="hamburger__menu">
        <nav className="tag-area_place_burger">
          <TagArea />
        </nav>
        <nav className="hamburger__roadmap roadmap_place_burger">
          <Roadmap />
        </nav>
      </div>
    </article>
  );
};
