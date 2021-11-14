import React from "react";
import { Link } from "react-router-dom";

export const FeedbackBanner = () => {
  const tagNames = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];
  const renderLis = tagNames.map((name) => (
    <li class="drop-menu__item" data-id="Most Upvotes">
      <span class="drop-menu__text">{name}</span>
      <span class="drop-menu__icon drop-menu__icon_active"></span>
    </li>
  ));
  return (
    <section class="feedback-zone">
      <header class="header-main">
        <div class="header-main__icon"></div>
        <div class="header-main__title"></div>
        <p class="header-main__sort-unit">
          Sort by&nbsp;:&nbsp;
          <span class="header-main__sort-text">Most Upvotes</span>
          <span class="header-main__sort-arrow"></span>
          <ul class="drop-menu hide">{renderLis}</ul>
        </p>
        <Link to="/" class="button button_add button_place_header-main">
          &#43; Add Feedback
        </Link>
      </header>
      <div class="feed-cards"></div>
    </section>
  );
};
