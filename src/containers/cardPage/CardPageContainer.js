import { connect } from "react-redux";
import { handleLike, handleSave } from "../../overallReducer";
import CardPage from "./CardPage";

let mapStateToProps = (state) => {
  return {
    cardList: state.Overall.cardList,
  };
};

export default connect(mapStateToProps, { handleLike, handleSave })(CardPage);
