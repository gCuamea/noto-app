import { db } from '../firebase/fconfig';

export const loadNotes = async (uid) => {
  /* const owo = await db
    .collection(`${uid}/storage/notes`)
    .orderBy('date', 'desc').; */
  /* console.log(owo); */
  const notesDB = await db
    .collection(`${uid}/storage/notes`)
    .orderBy('date', 'desc')
    .get();
  const notes = [];

  notesDB.forEach((snap) => {
    notes.push({
      ...snap.data(),
      id: snap.id,
    });
  });

  return notes;
};
