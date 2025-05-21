import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../Slices/NotesSlice.js";

const store = configureStore({
  reducer: {
    notes: notesReducer
  },
});

export default store;
