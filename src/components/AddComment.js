import React, { useState } from "react";

export const AddComment = () => {
  const [textLength, setTextLength] = useState(250);
  const handleChange = (e) => setTextLength(()=>250 - e.target.value.length);

    return (
    <section className="add-comment">
      <h1 className="comment__title">Add Comments</h1>
      <form className="add-comment__form">
        <textarea className="comment__textarea" placeholder="Type your comment here" maxLength={250} onChange={handleChange} />
        <div className="comment__footer">
          <div className="comment__counter">
            <p className="comment__text">{textLength} Characters left</p>
          </div>
          <button
            type="submit"
            className="button button_submit button_place_comment"
          >
            Post Comment
          </button>
        </div>

      </form>
    </section>
  );
};
