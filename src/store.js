import { createStore, combineReducers } from "redux";
import Header from "./Reducers/Header";
import Article from "./Reducers/Article";
import Pofol from "./Reducers/Pofol";
const rootReducer = combineReducers({Header, Article, Pofol});

const store = createStore(rootReducer);

export default store;
