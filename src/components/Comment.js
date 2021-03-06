import React, { useState } from "react";
import { Reply } from "./Reply";

export const Comment = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(!isVisible);

  return (
    <>
      <article className="comment__card">
        <img className="comment__avatar" src={data.owner.image} alt="author avatar" />
        <h2 className="comment__name">{data.owner.name}</h2>
        <p className="comment__username">@{data.owner.username}</p>
        <button type="button" className="comment__reply-btn" onClick={handleClick} >
          Reply
        </button>
        <p className="comment__text">{data.content}</p>
        <form className={`comment__reply-form ${isVisible ? 'comment__reply-form_visible' : ''}`}>
          <textarea className="comment__textarea"></textarea>
          <button
            type="submit"
            className="button button_submit button_place_comment"
          >
            Post reply
          </button>
        </form>
      </article>
      {data.replies.length > 0 &&
        data.replies.map((reply) => (
          <Reply key={reply._id} data={reply} replyTo={data.owner.username} />
        ))}
    </>
  );
};
