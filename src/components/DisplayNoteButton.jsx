import React from 'react';

export default function DisplayNoteButton({ onDisplay }) {

    onDisplay = () => {
        setNotes(notes);
    }

  return <button type="button" onClick={() => onDisplay()}>Notes</button>
}