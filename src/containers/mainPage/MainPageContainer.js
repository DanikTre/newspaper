import { connect } from "react-redux";
import { handleLikeAC } from "../../overallReducer";

import MainPage from "./MainPage";

let mapStateToProps = (state) => {
  return {
    cardList: state.Overall.cardList,
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
