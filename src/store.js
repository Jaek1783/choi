import { createStore, combineReducers } from "redux";
import Header from "./Reducers/Header";
import Article from "./Reducers/Article";
import Pofol from "./Reducers/Pofol";
import Youtube from "./Reducers/Youtube";
import Academy from "./Reducers/Academy";
const rootReducer = combineReducers({Header, Article, Pofol, Youtube, Academy});

const store = createStore(rootReducer);

export default store;
