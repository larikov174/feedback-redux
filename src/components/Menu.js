import React from "react";
import { Header } from "./Header";
import { TagArea } from "./TagArea";
import { Roadmap } from "./Roadmap";

export const Menu = () => {
  return (
    <section className="menu">
      <Header />
      <TagArea />
      <Roadmap />
    </section>
  );
}
