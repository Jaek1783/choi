import { createStore, combineReducers } from "redux";
import Header from "./Reducers/Header";
const rootReducer = combineReducers({Header});

const store = createStore(rootReducer);

export default store;
