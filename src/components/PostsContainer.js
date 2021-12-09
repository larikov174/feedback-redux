import React from "react";
import { Card } from "./Card";

export const PostsContainer = ({ cards, onCardClick }) => {

  return (
    <section className="feed-cards">
      {cards.map((item) => (
        <Card data={item} key={item._id} onCardClick={onCardClick} />
      ))}
    </section>
  );
};
