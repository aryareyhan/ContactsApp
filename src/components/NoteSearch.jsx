import React, { useState } from "react";

export default function NoteSearch({ onSearch }) {
  const [title, setTitle] = useState("");

  const onTitleChangeEventHandler = (event) => {
    if (event.target.value.length >= 50) {
      alert("Title must be less than 50 characters.");
      setTitle(event.target.value.substring(0, 50));
    } else {
      setTitle(event.target.value);
    }
  };

  const onSearchEventHandler = (event) => {
    event.preventDefault();
    onSearch(title);
  };

  return (
    <form className="note-input">
      <input
        type="text"
        placeholder="Search by Title"
        value={title}
        onChange={onTitleChangeEventHandler}
      />
      <button type="button" onClick={onSearchEventHandler}>
        Search Note
      </button>
    </form>
  );
}
