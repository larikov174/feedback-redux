import React from "react";

export const Card = ({ data, onCardClick }) => {
  return (
    <article className="card">
      <button className="card__vote-button">
        <span className="card__vote-button-icon" />
        <span className="card__vote-button-number">{data.upvotes}</span>
      </button>
      <h2 className="card__title">{data.title}</h2>
      <p className="card__text">{data.description}</p>
      <div className="card__tag">
        <div className="tag-item">{data.category}</div>
      </div>
      <div className="card__comments">
        <span className="card__comments-icon" />
        <span className="card__comments-number">{data.comments.length}</span>
      </div>
      <div
        className="card__overlay"
        onClick={() => {
          onCardClick({ ...data });
        }}
      ></div>
    </article>
  );
};
