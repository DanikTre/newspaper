import { combineReducers, createStore } from "redux";
import OverallReducer from "../overallReducer";
import HeaderReducer from "../containers/header/HeaderReducer";
import MainPageReducer from "../containers/mainPage/components/mainPageReducer";

import ArtPageReducer from "../containers/artPage/components/artPageReducer";

const reducers = combineReducers({
  Overall: OverallReducer,
  Header: HeaderReducer,
  MainPage: MainPageReducer,
  CardPage: "",
  ArtPage: ArtPageReducer,
});

const store = createStore(reducers);

export default store;
window.store = store;
