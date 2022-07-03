import { createStore, combineReducers } from "redux";
import Header from "./Reducers/Header";
import Article from "./Reducers/Article";
const rootReducer = combineReducers({Header, Article});

const store = createStore(rootReducer);

export default store;
