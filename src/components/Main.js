import React from "react";
import { Menu } from "./Menu";
import { ControlBar } from "./ControlBar";
import { PostsContainer } from "./PostsContainer";

export const Main = ({ onVote }) => {

  return (
    <article className="main">
      <Menu />
      <ControlBar />
      <PostsContainer onVote={onVote} />
    </article>
  );
};
