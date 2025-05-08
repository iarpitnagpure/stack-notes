import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/ThemeSlice.js";
import authReducer from "../Slices/AuthSlice.js";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer
  },
});

export default store;
