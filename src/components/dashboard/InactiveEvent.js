import React from 'react';
import { useDispatch } from 'react-redux';
import { startNewNote } from '../../actions/notes';

export const InactiveEvent = () => {
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(startNewNote());
  };
  return (
    <h3 className="nothing-selected active__event" onClick={handleAddNew}>
      Selecciona una nota o haz clic aqui para crear una nueva nota.
    </h3>
  );
};
