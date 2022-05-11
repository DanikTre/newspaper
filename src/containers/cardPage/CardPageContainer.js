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
    handleLike: (id) => {
      dispatch(handleLikeAC(id));
    },
    handleSave: (id) => {
      dispatch(handleSaveAC(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardPage);
