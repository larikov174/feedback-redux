import React from "react";
import { Link } from "react-router-dom";
import { useAtomValue } from 'jotai/utils'
import { Posts } from "../atoms/Atoms";

export const RoadmapPage = () => {
  const posts = useAtomValue(Posts);
  const tagNames = [{ name: "Planned", subtitle: "Ideas prioritized for research", theme: "theme_planned" }, { name: "in-Progress", subtitle: "Currently being developed", theme: "theme_in-progress" }, { name: "live", subtitle: "Released features", theme: "theme_live" }];
  const renderList = tagNames.map((tag) => (
    <div key={tag.name} className="roadmap-page__column">
      <h2 className="roadmap-page__title">{tag.name}({(posts.filter(post => post.status === tag.name)).length})</h2>
      <p className="roadmap-page__subtitle">{tag.subtitle}</p>
      {posts.map((post) =>
        <article class="roadmap-card">
          <div class="roadmap-card__overlay">
            <div class="roadmap-card__header">
              <div class="roadmap-card__decor"></div>
              <p class="roadmap-card__text_subtitle">{(tag.name).toLowerCase()}</p>
            </div>
            <h3 class="roadmap-card__title">{post.title}</h3>
            <p class="roadmap-card__text">It would be great to see a more detailed breakdown of solutions.</p>
            <div class="tag-item tag-item_place_roadmap-card">feature</div>

            <div class="roadmap-card__info">
              <button class="button button_vote button_place_roadmap-card">
                <span class="button__icon"></span>
                <span class="button__vote-number">123</span>
              </button>
              <div className="card__comments">
                <span className="card__comments-icon" />
                <span className="card__comments-number">{2}</span>
              </div>
            </div>
          </div>
        </article>
      )}
    </div>
  ));

  return (
    <article className="roadmap-page">
      <header className="roadmap-page__header">
        <div className="roadmap-page__caption">
          <Link className="return return_place_roadmap" to="/">
            <span className="return__arrow return__arrow_light" />
            Go Back
          </Link>
          <h1 class="roadmap__title roadmap__title_light">Roadmap</h1>
        </div>
        <button class="button button_submit button_place_control-bar">&#43; Add Feedback</button>
      </header>
      <nav class="container-roadmap__menu">
        <div class="roadmap__title roadmap__title_place_roadmap-menu" id="planned">Planned(2)</div>
        <div class="roadmap__title roadmap__title_place_roadmap-menu roadmap__title_progress_active" id="progress">
          In-Progress(2)
        </div>
        <div class="roadmap__title roadmap__title_place_roadmap-menu" id="live">Live(2)</div>
      </nav>
      <div className="roadmap-page__columns">
        {renderList}
      </div>
    </article>
  );
};
