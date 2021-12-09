import React from "react";
import { Card } from "./Card";

export const FeedCards = ({ cards }) => {
  
  return (
    <section className="feed-cards">
      {cards.map((item) => (
        <Card data={item} key={item._id} />
      ))}
    </section>
  );
};
