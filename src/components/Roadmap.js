import React from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from 'jotai/utils'
import { Posts } from "../atoms/Atoms";

export const Roadmap = () => {
  const posts = useAtomValue(Posts);
  const tagNames = [{ name: "Planned", theme: "theme_planned" }, { name: "in-Progress", theme: "theme_in-progress" }, { name: "live", theme: "theme_live" }];
  const renderLis = tagNames.map((tag) => (
    <div key={tag.name} className="roadmap__unit">
      <div className="roadmap__icon-block">
        <div className={`roadmap__icon ${tag.theme}`} />
      </div>
      <p className="roadmap__name">{tag.name}</p>
      <p className="roadmap__number">{(posts.filter(post => post.status === tag.name)).length}</p>
    </div>
  ));

  return (
    <nav className="roadmap__container">
      <div className="roadmap__header">
        <h2 className="roadmap__title">Roadmap</h2>
        <Link to="roadmap" className="roadmap__link">
          View
        </Link>
      </div>
      {renderLis}
    </nav>
  );
};
