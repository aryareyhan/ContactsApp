import React, { useState } from 'react';

export default function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onTitleChangeEventHandler = (event) => {
    if (event.target.value.length >= 50) {
      alert("Title must be less than 50 characters.");
      setTitle(event.target.value.substring(0, 50));
    }
    else{
      setTitle(event.target.value);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (title.trim() !== '' && body.trim() !== '') {
      addNote({ title, body });
      setTitle(''); // Clear the input fields
      setBody('');
    } else {
      // Show an error or perform some action when validation fails
      alert("Both fields must have a value.");
    }
  };

  return (
    <form className="note-input" onSubmit={onSubmitEventHandler}>
      <input type="text" placeholder="Title" value={title} onChange={onTitleChangeEventHandler} />
      <input type="text" placeholder="Body" value={body} onChange={onBodyChangeEventHandler} />
      <button type="submit">Add Note</button>
    </form>
  );
}