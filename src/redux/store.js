import { createStore } from "redux";
import notesReducer from "./notes/notesReducer";
const store = createStore(notesReducer);

export default store;
