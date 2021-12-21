import React from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { AddComment } from "./AddComment";

export const CommentsContainer = ({ data }) => {
  return (
    <section className="comments-container">
      <header className="comments-container__header">
        <Link className="return" to="/">
          <span className="return__arrow return__arrow_dark" />
          Go Back
        </Link>
        <Link className="button button_edit" to="/edit">
          Edit Feedback
        </Link>
      </header>

      <Post post={data} />

      <section className="comment">
        <h1 className="comment__title">{data.comments.length} Comments</h1>

        {data.comments.map((comment) => (
          <Comment key={comment._id} data={comment} />
        ))}
      </section>
      <AddComment />
    </section>
  );
};
