import React from 'react'

export default function NoteItemBody({ title, body }) {
    return (
      <div className="note-item__body">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__content">{body}</p>
      </div>
    );
}