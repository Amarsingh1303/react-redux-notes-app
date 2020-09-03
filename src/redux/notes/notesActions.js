import { ADD_NOTE, DELETE_NOTE } from "./notesType";

export const addNote = (post) => {
  return {
    type: ADD_NOTE,
    payload: post,
  };
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};
