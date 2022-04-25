import { connect } from "react-redux";

import MainPage from "./MainPage";
import {
  handleLikeAC,
  setValue1,
  setValue2,
  value1,
  value2,
} from "./components/mainPageReducer";

let mapStateToProps = (state) => {
  const mainPageState = state.MainPage;
  return {
    cardList: mainPageState.cardList,
    topicOptions: mainPageState.topicOptions,
    weekOptions: mainPageState.weekOptions,
    value1: value1,
    value2: value2,
    setValue1: setValue1,
    setValue2: setValue2,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleLike: (cardID) => {
      dispatch(handleLikeAC(cardID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
