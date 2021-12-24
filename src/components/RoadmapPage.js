import React from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from 'jotai/utils'
import { Posts } from "../atoms/Atoms";

export const RoadmapPage = () => {
  const windowWidth = window.innerWidth;
  console.log(windowWidth);
  const posts = useAtomValue(Posts);
  const tagNames = [{ name: "Planned", subtitle: "Ideas prioritized for research", theme: "theme_planned" }, { name: "in-Progress", subtitle: "Currently being developed", theme: "theme_in-progress" }, { name: "live", subtitle: "Released features", theme: "theme_live" }];
  const renderList = tagNames.map((tag) => (
    <div key={tag.name} className="roadmap-page__column">
      <h2 className="roadmap-page__title">{tag.name}({(posts.filter(post => post.status === tag.name)).length})</h2>
      <p className="roadmap-page__subtitle">{tag.subtitle}</p>
      {posts.map((post) =>
        tag.name === post.status &&
        <article key={post._id} className="roadmap-card">
          <div className="roadmap-card__overlay">
            <div className="roadmap-card__header">
              <div className="roadmap-card__decor"></div>
              <p className="roadmap-card__text_subtitle">{(tag.name).toLowerCase()}</p>
            </div>
            <h3 className="roadmap-card__title">{post.title}</h3>
            <p className="roadmap-card__text">{post.description}</p>
            <div className="tag-item tag-item_place_roadmap-card">{post.category}</div>

            <div className="roadmap-card__info">
              <button className="button button_vote button_place_roadmap-card">
                <span className="button__icon"></span>
                <span className="button__vote-number">{post.upvotes.length}</span>
              </button>
              <div className="card__comments">
                <span className="card__comments-icon" />
                <span className="card__comments-number">{post.comments.length}</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  ));

  const renderNav = tagNames.map((tag) => (
    <h2 key={tag.name} className="roadmap-page__title roadmap-page__title_place_nav">{tag.name}({(posts.filter(post => post.status === tag.name)).length})</h2>
  ));

  return (
    <article className="roadmap-page">
      <header className="roadmap-page__header">
        <div className="roadmap-page__caption">
          <Link className="return return_place_roadmap" to="/">
            <span className="return__arrow return__arrow_light" />
            Go Back
          </Link>
          <h1 className="roadmap__title roadmap__title_light">Roadmap</h1>
        </div>
        <button className="button button_submit button_place_control-bar">&#43; Add Feedback</button>
      </header>
      <nav className="roadmap-page__nav">
        {renderNav}
      </nav>
      <div className="roadmap-page__columns">
        {renderList}
      </div>
    </article>
  );
};
