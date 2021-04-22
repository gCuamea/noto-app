import React from 'react';
import { useSelector } from 'react-redux';
import { SidebarNote } from './SidebarNote';

export const RenderNotes = ({ pinned, nonPinned }) => {
  const { active } = useSelector((state) => state.notes);
  return (
    <>
      {!!pinned.length && (
        <div className="sidebar__pinned">
          <div className="sidebar__pinned__header">
            <i className="bi bi-pin-fill"></i>
            <h3>Pinned</h3>
          </div>

          {pinned.map((note) => (
            <SidebarNote
              key={note.id}
              active={active?.id === note.id}
              {...note}
            />
          ))}
        </div>
      )}

      {!!nonPinned.length && (
        <div className="sidebar__nonpinned">
          {nonPinned.map((note) => (
            <SidebarNote
              key={note.id}
              active={active?.id === note.id}
              {...note}
            />
          ))}
        </div>
      )}
    </>
  );
};
