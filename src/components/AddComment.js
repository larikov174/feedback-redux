import React from "react";

export const AddComment = () => {
  return (
    <section className="add-comment">
      <h1 className="comment__title">Add Comments</h1>
      <form className="comment__reply-form comment__reply-form_visible">
        <textarea className="comment__textarea" placeholder="Type your comment here" maxLength={250} />
        <div className="comment__footer">
          <div className="comment__counter">
            <p className="comment__number">250</p>
            <p className="comment__text">Characters left</p>
          </div>
          <button
            type="submit"
            className="button button_submit button_place_comment"
          >
            Post reply
          </button>
        </div>

      </form>
    </section>
  );
};
