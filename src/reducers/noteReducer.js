import { types } from '../type/types';

const initState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initState, action) => {
  switch (action.type) {
    case types.noteActive:
      return {
        ...state,
        active: { ...action.payload },
      };
    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.noteListUpdate:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.noteDelete:
      return {
        ...state,
        notes: state.notes.filter((note) =>
          note.id === action.payload ? false : true
        ),
        active: null,
      };
    case types.noteClean:
      return {
        ...initState,
      };
    case types.noteAddNew:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case types.notePin:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload) {
            return { ...note, pinned: !note.pinned };
          }
          return note;
        }),
      };

    default:
      return state;
  }
};
