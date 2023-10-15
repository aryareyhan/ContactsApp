import React from 'react';
import NoteItemArchived from './NoteItemArchived';
 
export default function NoteListArchived({ notes }) {
  return (
    <div className="note-list">
      {
        notes.map((note) => (
          <NoteItemArchived 
          key={note.id}
          id={note.id}
          {...note} />
        ))
      }
    </div>
  );
}