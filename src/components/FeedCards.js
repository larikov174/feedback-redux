import React from "react";
import { Card } from "./Card";

export const FeedCards = ({ initData }) => {
  return (
    <section className="feed-cards">
      <Card initData={initData} />
    </section>
  );
};
