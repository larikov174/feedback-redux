import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";

export const CommentsContainer = ({ data, onCardClick }) => {

  return (
    <section className="comments-container">
      <header className="comments-container__header">
        <Link className="return" to="/">
          <span className="return__arrow return__arrow_dark" />
          Go Back
        </Link>
        <Link className="button button_edit" to="/"> Edit Feedback </Link>
      </header>
      <Card data={data} />
    </section>
  );
};
