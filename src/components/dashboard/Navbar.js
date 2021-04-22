import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startImgUpload, startSaveNote } from '../../actions/notes';

export const Navbar = () => {
  const { displayName } = useSelector((state) => state.auth);
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handlePictureClick = () => {
    document.querySelector('#file-selector').click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    dispatch(startImgUpload(file));
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="topnavbar">
      <input
        id="file-selector"
        type="file"
        style={{ display: 'none' }}
        name="file"
        onChange={handleFileChange}
      />
      <div className="topnavbar__auth">
        <h3>{displayName}</h3>
        <button onClick={handleLogout}>
          <i className="bi bi-door-open-fill"></i>
          &nbsp;Sign out
        </button>
      </div>
      <div className="topnavbar__actions">
        {note && (
          <>
            <button onClick={handlePictureClick} className="button button-red">
              Upload picture
            </button>
            <button onClick={handleSave} className="button button-orange">
              Save
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
