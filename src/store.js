import React, { createContext, useReducer } from "react";

const initialState = {
  folders: [],
  notes: {},
  currentId: "",
};
const NotesContext = createContext(initialState);

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case "SET_DATA":
      let notes = {};
      if(payload.items.length === 0) {
        return state
      }
      payload.items.forEach((folder) => {
        if (folder.notes.items.length) {
          notes = { ...notes, [folder.id]: folder.notes.items };
        } else {
          notes = { ...notes, [folder.id]: [] };
        }
      });
      return {
        ...state,
        notes,
        folders: payload.items,
        currentId: payload.items[0].id,
      };
    case "ADD_NOTE":
      let data = state.notes
      data[state.currentId].unshift(payload.note)
      return {
        ...state,
        notes: data,
      };
    case "SET_CURRENT_ID":
      return { ...state, currentId: payload.id };
    default:
      return state;
  }
};

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesContext, NotesProvider };
