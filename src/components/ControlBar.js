import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { Posts } from "../atoms/Atoms";
import { DropMenu } from "./DropMenu";

export const ControlBar = () => {
  const posts = useAtom(Posts);
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = () => setIsVisible(!isVisible);

  return (
    <section className="control-bar">
      <div className="control-bar__icon" />
      <div className="control-bar__title">{posts[0].length} Suggestions</div>
      <Link
        to="/add"
        className="button button_submit button_place_control-bar"
      >
        &#43; Add Feedback
      </Link>
      <nav className="control-bar__sort-unit" onClick={handleClick}>
        Sort by&nbsp;:&nbsp;
        <span className="control-bar__sort-text">Most Upvotes</span>
        <div className="control-bar__sort-arrow" />
      </nav>
      <DropMenu isVisible={isVisible} />
    </section>
  );
};
