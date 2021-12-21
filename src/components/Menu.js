import React from "react";
import { Header } from "./Header";
import { TagArea } from "./TagArea";
import { Roadmap } from "./Roadmap";

export const Menu = () => {
  return (
    <section className="menu">
      <Header />
      <article className="tag-area tag-area_place_main">
        <TagArea />
      </article>
      <article className="roadmap roadmap_place_main">
        <Roadmap />
      </article>
    </section>
  );
}
