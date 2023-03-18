import { configureStore } from "@reduxjs/toolkit"; 
import { combineReducers } from "@reduxjs/toolkit";
import { addMenuItems } from "./slice";

const rootReducers = combineReducers({
  menuItems:addMenuItems
})
const store = configureStore({reducer:rootReducers});

export default store;