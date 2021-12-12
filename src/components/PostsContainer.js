import React from "react";
import { Post } from "./Post";
import { useAtomValue } from 'jotai/utils'
import { Posts } from "../atoms/Atoms";

export const PostsContainer = ({ onVote }) => {
  const posts = useAtomValue(Posts);

  return (
    <section className="feed-cards">
      {posts.map((item) => (
        <Post post={item} key={item._id} onVote={onVote} />
      ))}
    </section>
  );
};
