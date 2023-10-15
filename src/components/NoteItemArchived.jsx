import React from "react";
import NoteItemBody from "./NoteItemBody";

export default function NoteItemArchived({ title, body}) {
  return (
    <div className="note-item">
      <NoteItemBody title={title} body={body} />
      <div className="note-item__buttons">
      </div>
    </div>
  );
}
