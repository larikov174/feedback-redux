import React from "react";
import { Link } from "react-router-dom";

export const Empty = () => {
  return (
    <section className="empty">
      <div className="empty__image" />
      <h2 className="empty__title">There is no feedback yet.</h2>
      <p className="empty__text">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link
        to="/"
        className="button button__submit button__submit_place_empty"
      >
        &#43; Add Feedback
      </Link>
    </section>
  );
};
