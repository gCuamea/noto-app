import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { RenderNotes } from './RenderNotes';
import { SidebarNote } from './SidebarNote';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchingNotes, setSearchingNotes] = useState(false);
  const [searchedNotes, setSearchedNotes] = useState([]);
  const { notes, active } = useSelector((state) => state.notes);
  const date = new Date();

  const [values, handleInputChange, reset] = useForm({
    searchParam: '',
  });
  const { searchParam } = values;

  let pinnedNotes = notes.filter((note) => {
    if (note.pinned) return true;
    return false;
  });

  let nonPinnedNotes = notes.filter((note) => {
    if (note.pinned) return false;
    return true;
  });

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchingNotes(true);
    setSearchedNotes(
      notes.filter((note) => {
        if (
          note.text.toLowerCase().includes(searchParam.toLowerCase()) ||
          note.title.toLowerCase().includes(searchParam.toLowerCase())
        )
          return true;

        return false;
      })
    );
    reset();
  };

  const handleCancelSearch = () => {
    setSearchingNotes(false);
  };

  return (
    <div className="sidebar">
      <p className="text-end sidebar__date">{date.toLocaleDateString()}</p>
      {/* TODO: Fecha real pendiente */}
      <div className="sidebar__top">
        <h2 className="px-4">Notes</h2>
        <i className="bi bi-plus-circle-fill" onClick={handleAddNew}></i>
      </div>
      <div className="sidebar__search my-3">
        <i className="bi bi-search"></i>
        <form onSubmit={handleSearch}>
          <input
            value={values.searchParam}
            name="searchParam"
            onChange={handleInputChange}
            type="text"
            className="px-3"
            placeholder="Search in notes..."
          />
        </form>
      </div>
      {searchingNotes && (
        <div className="px-3">
          <button
            className="button button-red button-centered animate__animated animate__backInLeft"
            onClick={handleCancelSearch}
          >
            Cancel search
          </button>
        </div>
      )}

      {searchingNotes === true ? (
        searchedNotes.map((note) => {
          return (
            <SidebarNote
              key={note.id}
              active={active?.id === note.id}
              {...note}
            />
          );
        })
      ) : (
        <RenderNotes pinned={pinnedNotes} nonPinned={nonPinnedNotes} />
      )}
    </div>
  );
};
