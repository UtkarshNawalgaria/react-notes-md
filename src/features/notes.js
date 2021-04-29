import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "aws-amplify";
import { getNote, listFolders } from "../graphql/queries";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const {
      data: {
        listFolders: { items },
      },
    } = await API.graphql({
      query: listFolders,
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    return { items };
  } catch (err) {
    console.error(err.message);
  }
});

export const fetchNoteById = createAsyncThunk("note/fetchNote", async (id) => {
  try {
    const {
      data: { getNote: note },
    } = await API.graphql({
      query: getNote,
      variables: { id },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    return { note };
  } catch (err) {
    console.error(err.message);
  }
});

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    folders: [],
    notes: {},
    currentFolderId: "",
    note: {
      id: "",
      title: "",
      content: "",
    },
    status: "loading",
  },
  reducers: {
    setCurrentFolder: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        currentFolderId: payload.id,
      };
    },
    setCurrentNote: (state, action) => {
      const {
        payload: { note },
      } = action;
      return {
        ...state,
        note,
      };
    },
    addNewFolder: (state, action) => {
      const {
        payload: { folder },
      } = action;
      state.folders.push(folder);
      state.notes = { ...state.notes, [folder.id]: [] };
      state.currentFolderId = folder.id;
    },
    addNewNote: (state, action) => {
      const {
        payload: { note },
      } = action;
      state.notes[state.currentFolderId].push(note);
      state.note = { ...note, content: "" };
    },
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.fulfilled]: (state, action) => {
      const { payload } = action;

      if (payload.items.length > 0) {
        let notes = {};
        payload.items.forEach((folder) => {
          if (folder.notes.items.length) {
            notes = { ...notes, [folder.id]: folder.notes.items };
          } else {
            notes = { ...notes, [folder.id]: [] };
          }
        });

        state.status = "success";
        state.folders = payload.items;
        state.notes = notes;
        state.currentFolderId = payload.items[0].id;
      }
    },
    [fetchNoteById.fulfilled]: (state, action) => {
      const { payload } = action;
      state.note = payload.note;
    },
  },
});

export const {
  initialize,
  setCurrentFolder,
  setCurrentNote,
  addNewFolder,
  addNewNote,
} = notesSlice.actions;

export default notesSlice.reducer;
