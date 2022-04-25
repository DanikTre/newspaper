import { combineReducers, createStore } from "redux";
import HeaderReducer from "../components/header/HeaderReducer";
import MainPageReducer from "../containers/mainPage/components/mainPageReducer";

const reducers = combineReducers({
  Header: HeaderReducer,
  MainPage: MainPageReducer,
  CardPage: "",
});

const store = createStore(reducers);

export default store;
window.store = store;
