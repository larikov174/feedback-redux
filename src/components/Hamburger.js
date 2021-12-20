import React from "react";
import { TagArea } from "./TagArea";
import { Roadmap } from "./Roadmap";

export const Hamburger = ({ visibility }) => {
  return (
    <article className={`hamburger ${visibility ? 'hamburger_visible' : ''}`}>
      <div className="hamburger__menu">
        <nav className="hamburger__tag-area">
          <TagArea />
        </nav>
        <nav className="hamburger__roadmap">
          <Roadmap />
        </nav>
      </div>
    </article>
  );
};
