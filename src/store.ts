import { combineReducers, createStore } from "@reduxjs/toolkit";
import noteReducer from "./features/My Notes/noteSlice";

const rootReducer = combineReducers({
  note: noteReducer,
});

const store = createStore(rootReducer);

export default store;
