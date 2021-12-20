import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";

import { SelectedPost } from "../atoms/Atoms";

export const Post = ({ post, onVote }) => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedPost, setSelectedPost] = useAtom(SelectedPost);


  const handleVoteClick = () => {
    setSelectedPost(post);
    onVote(post)
  }

  const handlePostClick = () => {
    setSelectedPost(post);
    navigate(`/comments`)
  }

  return (
    <article className="card">
      <button type="button" onClick={handleVoteClick} className="card__vote-button">
        <span className="card__vote-button-icon" />
        <span className="card__vote-button-number">{post.upvotes.length}</span>
      </button>
      <h2 className="card__title">{post.title}</h2>
      <p className="card__text">{post.description}</p>
      <div className="card__tag">
        <div className="tag-item">{post.category}</div>
      </div>
      <div className="card__comments">
        <span className="card__comments-icon" />
        <span className="card__comments-number">{post.comments.length}</span>
      </div>
      <div
        className="card__overlay"
        onClick={handlePostClick}
      ></div>
    </article>
  );
};
