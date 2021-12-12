import React from "react";
import { Post } from "./Post";
import { useAtom } from "jotai";
import { Posts } from "../atoms/Atoms";

export const PostsContainer = ({ onVote }) => {
  const [posts, setPosts] = useAtom(Posts);

  return (
    <section className="feed-cards">
      {posts.map((item) => (
        <Post post={item} key={item._id} onVote={onVote} />
      ))}
    </section>
  );
};
