import React, { useState } from "react";

export const Reply = ({ data, replyTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(!isVisible);

  return (
    <article className="comment__reply">
      <img className="comment__avatar" src={data.owner.image} alt="author avatar" />
      <h2 className="comment__name">{data.owner.name}</h2>
      <p className="comment__username">@{data.owner.username}</p>
      <button className="comment__reply-btn" onClick={handleClick}>Reply</button>
      <div className="comment__text">
        <span className="comment__reply-target">@{replyTo} </span>
        {data.content}
      </div>
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
  );
};
