import { configureStore } from "@reduxjs/toolkit";
import menuItemReducers from "../features/MenuItems"

const store = configureStore({
  reducer: {
    menuItems: menuItemReducers
  }
});

export default store;