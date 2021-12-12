import React from "react";
import { Menu } from "./Menu";
import { ControlBar } from "./ControlBar";
import { PostsContainer } from "./PostsContainer";

export const Main = ({ data, onPostClick, onVote }) => {

  return (
    <article className="main">
      <Menu />
      <ControlBar posts={data} />
      <PostsContainer posts={data} onPostClick={onPostClick} onVote={onVote} />
    </article>
  );
};
