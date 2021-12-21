import React from "react";
import { Link } from "react-router-dom";

export const Roadmap = () => {
  const tagNames = ["Planned", "in-Progress", "live"];
  const renderLis = tagNames.map((name) => (
    <div key={name} className="roadmap__unit">
      <div className="roadmap__icon-block">
        <div className="roadmap__icon" />
      </div>
      <p className="roadmap__name">{name}</p>
      <p className="roadmap__number">1</p>
    </div>
  ));

  return (
    <nav className="roadmap__container">
      <div className="roadmap__header">
        <h2 className="roadmap__title">Roadmap</h2>
        <Link to="/" className="roadmap__link">
          View
        </Link>
      </div>
      {renderLis}
    </nav>
  );
};
