import React from "react";
import { Link } from "react-router-dom";

export const EditComment = ({ data }) => {
  console.log(data);
  return (
    <article className="edit">
      <header className="comments-container__header">
        <Link className="return" to="/comments">
          <span className="return__arrow return__arrow_dark" />
          Go Back
        </Link>
      </header>
      <div className="edit-form__icon"></div>
      <form className="edit-form" action="#">
        <h1 className="edit-form__title">Editing `Add a dark theme option`</h1>
        <h2 className="edit-form__subtitle">Feedback Title</h2>
        <label htmlFor="inputTitle" className="edit-form__text">
          Add a short, descriptive headline
        </label>
        <input
          id="inputTitle"
          className="edit-form__input"
          name="title"
          type="text"
          placeholder=""
          minLength="2"
          maxLength="40"
          required=""
        />
        <h2 className="edit-form__subtitle">Category</h2>
        <label htmlFor="selectCategory" className="edit-form__text">
          Choose a category for your feedback
        </label>
        <select
          id="selectCategory"
          className="edit-form__select"
          name="category"
          type="text"
          required=""
        >
          <option value="null"></option>
          <option value="Feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="Enhancement">Enhancement</option>
          <option value="Bug">Bug</option>
        </select>
        <h2 className="edit-form__subtitle">Update Status</h2>
        <label htmlFor="selectOption" className="edit-form__text">
          Change feedback state
        </label>
        <select
          id="selectOption"
          className="edit-form__select"
          name="category"
          type="text"
          required=""
        >
          <option value="null"></option>
          <option value="Suggestion">Suggestion</option>
          <option value="Planned">Planned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>
        <h2 className="edit-form__subtitle">Feedback Detail</h2>
        <label htmlFor="inputComment" className="edit-form__text">
          Include any specific comments on what should be improved, added, etc.
        </label>
        <textarea
          id="inputComment"
          className="edit-form__textarea"
          name="detail"
          type="text"
          placeholder=""
          minLength="2"
          maxLength="100"
          required=""
        ></textarea>
        <div className="edit-form__actions">
          <button className="button button_delete">Delete</button>
          <button className="button button_cancel">Cancel</button>
          <button
            className="button button_submit button_place_edit"
            type="submit"
          >
            Add Feedback
          </button>
        </div>
      </form>
    </article>
  );
};
