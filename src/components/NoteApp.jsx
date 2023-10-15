import React, { useState, useEffect } from "react";
import NoteList from "./NoteList";
import { getData } from "../utils/data";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";
import NoteListArchived from "./NoteListArchived";

export default function NoteApp() {
  const [display, setDisplay] = useState([]);
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [displayArchived, setDisplayArchived] = useState(false);

  useEffect(() => {
    setNotes(getData());
    setDisplay(getData());
  }, []);

  const onArchiveHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    const noteToArchive = notes.find((note) => note.id === id);
    setNotes(updatedNotes);
    setArchivedNotes((prevNotes) => [...prevNotes, noteToArchive]);
    setDisplay(updatedNotes);
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    setDisplay(updatedNotes);
  };

  const onAddNoteHandler = ({ title, body }) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
      },
    ]);
    setDisplay((prevNotes) => [
      ...prevNotes,
      {
        id: +new Date(),
        title,
        body,
      },
    ]);
  };

  const onSearch = (searchTerm) => {
    if (searchTerm === "" || searchTerm === null) {
      setDisplay(notes);
      return;
    }
    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setDisplay(filteredNotes);
  };

  const onDisplayHandler = () => {
    setDisplayArchived(false);
  };

  const onDisplayArchivedHandler = () => {
    setDisplayArchived(true);
  };

  return (
    <div className="note-app">
      <div className="container">
        <div className="input-container">
          <h2>Create New Note</h2>
          <NoteInput addNote={onAddNoteHandler} />
          <h2>Search Note</h2>
          <NoteSearch onSearch={onSearch} />
          <h2>Note Category</h2>
          <div className="button-container">
            <button type="button" onClick={() => onDisplayHandler()}>
              Notes
            </button>
            <button type="button" onClick={() => onDisplayArchivedHandler()}>
              Archived
            </button>
          </div>
        </div>
        <div className="lists">
          <h2>Note List</h2>
          {displayArchived ? (
            <NoteListArchived notes={archivedNotes} />
          ) : (
            <NoteList
              notes={display}
              onDelete={onDeleteHandler}
              onArchive={onArchiveHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
}
