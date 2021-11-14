import React from "react";
import { Link } from "react-router-dom";

export const EmptyFeed = () => {
  return (
    <div class="empty-feed hide">
      <div class="empty-feed__image"></div>
      <h2 class="empty-feed__title">There is no feedback yet.</h2>
      <p class="empty-feed__text">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Link to="/" class="button button_add button_place_empty-feed">
        &#43; Add Feedback
      </Link>
    </div>
  );
};
