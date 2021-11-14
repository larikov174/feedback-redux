import React from "react";
import { Link } from "react-router-dom";

export const Roadmap = () => {
  const tagNames = ["Planned", "in-Progress", "live"];
  const renderLis = tagNames.map((name) => (
    <div class="roadmap__data">
      <div class="roadmap__unit">
        <div class="roadmap__icon roadmap__icon_planned"></div>
        <p class="roadmap__subtitle roadmap__subtitle_offset">{name}</p>
      </div>
      <p class="roadmap__number" id="roadmapPlannedNumber"></p>
    </div>
  ));

  return (
    <nav class="roadmap">
      <div class="roadmap__header">
        <h2 class="roadmap__title">Roadmap</h2>
        <Link to="/" class="roadmap__link desktop">
          View
        </Link>
      </div>
      <div class="roadmap__spacer"></div>
      {renderLis}
    </nav>
  );
};
