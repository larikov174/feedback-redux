import React from "react";
import { TagArea } from "../TagArea";
import { Roadmap } from "../roadmap/Roadmap";

export const Hamburger = () => {
  return (
    <article class="hamburger hide">
      <div class="hamburger__dialog">
        <nav class="hamburger__tag-area">
          <TagArea />
        </nav>
        <nav class="hamburger__roadmap">
          <Roadmap />
        </nav>
      </div>
    </article>
  );
};
