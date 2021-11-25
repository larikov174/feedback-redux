import React from "react";

export const Card = () => {
  return (
    <article className="card">
      <button className="card__vote-button">
        <span className="card__vote-button-icon" />
        <span className="card__vote-button-number">99</span>
      </button>
      <h2 className="card__title">Q about installed applications</h2>
      <p className="card__text">Some brif text about the issue</p>
      <div className="card__tag">
        <div className="tag-item">Feature</div>
      </div>
      <div className="card__comments">
        <span className="card__comments-icon" />
        <span className="card__comments-number">4</span>
      </div>
      <div className="card__overlay"></div>
    </article>
  );
};
