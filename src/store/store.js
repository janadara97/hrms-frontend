import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/slice"

const store = configureStore({
  reducer: rootReducer,
});

export default store;