import React, { useState } from 'react';

function ContactInput({ addContact }) {
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  const onNameChangeEventHandler = (event) => {
    setName(event.target.value);
  };

  const onTagChangeEventHandler = (event) => {
    setTag(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (name.trim() !== '' && tag.trim() !== '') {
      addContact({ name, tag });
      setName(''); // Clear the input fields
      setTag('');
    } else {
      // Show an error or perform some action when validation fails
      alert("Both fields must have a value.");
    }
  };

  return (
    <form className="contact-input" onSubmit={onSubmitEventHandler}>
      <input type="text" placeholder="Name" value={name} onChange={onNameChangeEventHandler} />
      <input type="text" placeholder="Tag" value={tag} onChange={onTagChangeEventHandler} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactInput;
