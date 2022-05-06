import { combineReducers, createStore } from "redux";
import HeaderReducer from "../components/header/HeaderReducer";
import ArtPageReducer from "../containers/artPage/components/artPageReducer";
import MainPageReducer from "../containers/mainPage/components/mainPageReducer";
import OverallReducer from "../overallReducer";

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
