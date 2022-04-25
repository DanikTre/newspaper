import { connect } from "react-redux";

import Header from "./Header";
import { handleSelectAC } from "./HeaderReducer";

let mapStateToProps = (state) => {
  const HeaderState = state.Header;
  return {
    topicOptions: HeaderState.topicSelect.options,
    weekOptions: HeaderState.weekSelect.options,
    value1: HeaderState.topicSelect.selected,
    value2: HeaderState.weekSelect.selected,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleTopicSelect: (optionID) => {
      const whichButton = "topicSelect";
      dispatch(handleSelectAC("topicSelect", optionID));
    },
    handleWeekSelect: (optionID) => {
      dispatch(handleSelectAC(optionID));
    },
    handleOpen: (optionID) => {
      dispatch(handleSelectAC(optionID));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
