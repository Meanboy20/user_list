import { createStore } from "redux";
import userDataReducer from "./userDataReducer";

const store = createStore(userDataReducer);
export default store;
