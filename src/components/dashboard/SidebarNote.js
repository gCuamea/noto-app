import React from 'react';
import { useDispatch } from 'react-redux';
import { activeNote, startDeleteNote, startPinNote } from '../../actions/notes';

export const SidebarNote = ({ title, date, text, id, pinned, url, active }) => {
  const dispatch = useDispatch();
  /* console.log(active); */

  const dateToDisplay = new Date(date);
  const displayTitle =
    title.length === 0
      ? `Empty title`
      : title.length > 8
      ? `${title.substr(0, 8)}...`
      : title;

  const displayText =
    text.length === 0
      ? `Empty note`
      : text.length > 14
      ? `${title.substr(0, 15)}...`
      : text;

  const handleNoteClick = () => {
    dispatch(activeNote(id, { title, date, text, pinned, url }));
  };

  const handleNoteDelete = (e) => {
    e.stopPropagation();
    dispatch(startDeleteNote(id));
  };

  const handleNotePin = (e) => {
    e.stopPropagation();
    dispatch(startPinNote(id));
  };

  return (
    <div
      onClick={handleNoteClick}
      className={`sidebar__note animate__animated animate__fadeInLeft ${
        active ? 'sidebar__note-active' : ''
      }`}
    >
      <div>
        <h3>{displayTitle}</h3>
      </div>
      <p>
        {dateToDisplay.toLocaleDateString()} <span>{displayText}...</span>
      </p>
      <i
        onClick={handleNotePin}
        className={`bi bi-geo${pinned ? '-fill' : ''} i-icon`}
      ></i>
      <i onClick={handleNoteDelete} className="bi bi-x-circle-fill i-icon"></i>
      {url && <i className="bi bi-image overlay-i"></i>}
    </div>
  );
};
