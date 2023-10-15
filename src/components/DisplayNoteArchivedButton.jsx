import React from 'react';

export default function DisplayNoteArchivedButton({ onDisplayArchived }) {

  onDisplayArchived = () => {
    setNotes(archivedNotes);
  }

  return <button type="button" onClick={() => onDisplayArchived()}>Archived</button>
}