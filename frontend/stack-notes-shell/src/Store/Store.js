import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/ThemeSlice.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
