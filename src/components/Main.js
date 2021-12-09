import React from "react";
import { Menu } from "./Menu";
import { ControlBar } from "./ControlBar";
import { PostsContainer } from "./PostsContainer";

export const Main = ({ data, onCardClick }) => {

  return (
    <article className="main">
      <Menu />
      <ControlBar cards={data} />
      <PostsContainer cards={data} onCardClick={onCardClick} />
    </article>
  );
};
