import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddPost = ({ onSubmitPost }) => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [description, setDescription] = React.useState('');
  const status = 'Suggestion';
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleCancel = () => navigate('/');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitPost({
      title,
      category,
      description,
      status,
    })
  }

  return (
    <article className="edit-container">
      <header className="comments-container__header">
        <Link className="return" to="/">
          <span className="return__arrow return__arrow_dark" />
          Go Back
        </Link>
      </header>
      <div className="form__icon form__icon_type_add"></div>
      <form className="form" action="#">
        <h1 className="form__title">Create New Feedback</h1>
        <h2 className="form__subtitle">Feedback Title</h2>
        <label htmlFor="inputTitle" className="form__text">
          Add a short, descriptive headline
        </label>
        <input
          id="inputTitle"
          className="form__input"
          name="title"
          type="text"
          placeholder=""
          minLength="2"
          maxLength="40"
          value={title || ''}
          onChange={handleTitleChange}
          required={true}
        />
        <h2 className="form__subtitle">Category</h2>
        <label htmlFor="selectCategory" className="form__text">
          Choose a category for your feedback
        </label>
        <select
          id="selectCategory"
          className="form__select"
          name="category"
          type="text"
          required={true}
          value={category || ''}
          onChange={handleCategoryChange}
        >
          <option value="null"></option>
          <option value="feature">Feature</option>
          <option value="UI">UI</option>
          <option value="UX">UX</option>
          <option value="enhancement">Enhancement</option>
          <option value="bug">Bug</option>
        </select>
        <h2 className="form__subtitle">Feedback Detail</h2>
        <label htmlFor="inputComment" className="form__text">
          Include any specific comments on what should be improved, added, etc.
        </label>
        <textarea
          id="inputComment"
          className="form__textarea"
          name="detail"
          type="text"
          placeholder=""
          minLength="2"
          maxLength="100"
          required={true}
          value={description || ''}
          onChange={handleDescriptionChange}
        ></textarea>
        <div className="form__actions">
          <button
            className="button button_cancel"
            type="button"
            onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="button button_submit button_place_edit"
            type="submit"
            onClick={handleSubmit}
          >
            Add Feedback
          </button>
        </div>
      </form>
    </article>
  );
};
