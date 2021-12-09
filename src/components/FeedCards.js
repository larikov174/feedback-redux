import React from "react";
import { Card } from "./Card";

export const FeedCards = ({ cards, onCardClick }) => {
  
  return (
    <section className="feed-cards">
      {cards.map((item) => (
        <Card data={item} key={item._id} onCardClick={onCardClick} />
      ))}
    </section>
  );
};
