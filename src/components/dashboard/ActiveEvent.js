import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

export const ActiveEvent = () => {
  const { active } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [values, handleOnChange, reset] = useForm(active);

  const activeId = useRef(active.id);

  useEffect(() => {
    if (active.id !== activeId.current) {
      reset(active);
      activeId.current = active.id;
    }
  }, [active, reset]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [dispatch, values]);

  return (
    <div className="active__event">
      <input
        className="form-none"
        name="title"
        value={values.title}
        onChange={handleOnChange}
        type="text"
        placeholder="Titulo..."
      />
      <textarea
        className="form-none"
        name="text"
        value={values.text}
        onChange={handleOnChange}
        id=""
        placeholder="Notas..."
      ></textarea>
      {!!active.url && (
        <img
          className="note__image animate__animated animate__fadeInDown"
          src={active.url}
          alt="User uploaded media"
        />
      )}
    </div>
  );
};
