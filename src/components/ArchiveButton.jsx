import React from 'react';

export default function ArchiveButton({ id, onArchive }) {
  return <button className='note-item__archive' onClick={() => onArchive(id)}>📦</button>
}