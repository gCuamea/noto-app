import Swal from 'sweetalert2';
import { db } from '../firebase/fconfig';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../type/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      text: '',
      pinned: false,
      url: '',
      date: new Date().getTime(),
    };

    const doc = await db.collection(`${uid}/storage/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote));
    dispatch(addNewNote(doc.id, newNote));
  };
};

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: {
    ...note,
    id,
  },
});

export const addNewNote = (id, note) => ({
  type: types.noteAddNew,
  payload: { ...note, id },
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/storage/notes/${note.id}`).update(noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire(
      'Saved!',
      `Note: ${note.title} was saved succesfully.`,
      'success'
    );
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    await db.collection('s')
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const refreshNote = (id, note) => ({
  type: types.noteListUpdate,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const startDeleteNote = (noteId) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    try {
      const resp = await db.doc(`${uid}/storage/notes/${noteId}`);
      await resp.delete();
      dispatch(deleteNote(noteId));
    } catch (error) {
      console.log(error);
    }
  };
};

export const startPinNote = (noteId) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    try {
      const resp = await db.doc(`${uid}/storage/notes/${noteId}`);
      const respData = await resp.get();
      const data = await respData.data();

      await resp.update({
        pinned: !data.pinned,
      });

      dispatch(pinNote(noteId));
    } catch (error) {
      console.error(error);
    }
  };
};

export const pinNote = (noteId) => ({
  type: types.notePin,
  payload: noteId,
});

export const deleteNote = (noteId) => {
  return {
    type: types.noteDelete,
    payload: noteId,
  };
};

export const notesLogout = () => {
  return {
    type: types.noteClean,
  };
};

export const startImgUpload = (file) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes;
    Swal.fire({
      title: 'Uploading...',
      text: 'Please wait...',
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    activeNote.url = fileUrl;
    dispatch(startSaveNote(activeNote));
    Swal.close();
  };
};
