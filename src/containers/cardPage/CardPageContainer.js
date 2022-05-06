import { connect } from "react-redux";
import { handleLikeAC, handleSaveAC } from "../../overallReducer";
import CardPage from "./CardPage";

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
    handleSave: (cardID) => {
      dispatch(handleSaveAC(cardID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
