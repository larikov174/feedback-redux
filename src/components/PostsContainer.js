import React from "react";
import { Post } from "./Post";

export const PostsContainer = ({ posts, onPostClick, onVote }) => {

  return (
    <section className="feed-cards">
      {posts.map((item) => (
        <Post data={item} key={item._id} onPostClick={onPostClick} onVote={onVote} />
      ))}
    </section>
  );
};
