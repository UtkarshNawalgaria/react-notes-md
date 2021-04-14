import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./features/notes";

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});

// import React, { createContext, useContext, useReducer } from "react";

// const initialState = {
//   folders: [],
//   notes: {},
//   currentFolderId: "",
//   note: {
//     id: "",
//     title: "",
//     content: "",
//   },
// };
// const NotesContext = createContext(initialState);

// const reducer = (state, action) => {
//   const { payload, type } = action;
//   switch (type) {
//     case "SET_DATA":
//       let notes = {};
//       let note = {}
//       if (payload.items.length === 0) {
//         return state;
//       }
//       payload.items.forEach((folder) => {
//         if (folder.notes.items.length) {
//           notes = { ...notes, [folder.id]: folder.notes.items };
//         } else {
//           notes = { ...notes, [folder.id]: [] };
//         }
//       });
//       const firstId = payload.items[0].id
//       if(notes[firstId].length) {
//         note = notes.firstId[0]
//         note.content = ""
//       }
//       return {
//         ...state,
//         notes,
//         folders: payload.items,
//         currentFolderId: payload.items[0].id,
//         note
//       };
//     case "ADD_NOTE":
//       let data = state.notes;
//       data[state.currentFolderId].unshift(payload.note);
//       return {
//         ...state,
//         notes: data,
//       };
//     case "ADD_FOLDER":
//       return state;
//     case "SET_CURRENT_FOLDER_ID":
//       return { ...state, currentFolderId: payload.id };
//     case "SET_CURRENT_NOTE":
//       if(payload.note) {
//         return { ...state, note: payload.note };
//       }
//       return {...state}
//     default:
//       return state;
//   }
// };

// export const NotesProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <NotesContext.Provider value={{ state, dispatch }}>
//       {children}
//     </NotesContext.Provider>
//   );
// };

// const useNotes = () => {
//   return useContext(NotesContext);
// };

// export default useNotes;
