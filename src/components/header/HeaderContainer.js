import { connect } from "react-redux";

import Header from "./Header";
import { handleSelectOptionAC, setOpenedAC } from "./HeaderReducer";

let mapStateToProps = (state) => {
  const HeaderState = state.Header;
  return {
    topicOptions: HeaderState.topicSelect.options,
    weekOptions: HeaderState.weekSelect.options,
    topicSelected: HeaderState.topicSelect.selected,
    weekSelected: HeaderState.weekSelect.selected,
    topicOpened: HeaderState.topicSelect.opened,
    weekOpened: HeaderState.weekSelect.opened,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleTopicSelectOption: (optionID) => {
      const whichButton = "topicSelect";
      dispatch(handleSelectOptionAC(whichButton, optionID));
      console.log("dispatch(handleSelectAC - topicSelect");
    },
    handleWeekSelectOption: (optionID) => {
      const whichButton = "weekSelect";
      dispatch(handleSelectOptionAC(whichButton, optionID));
      console.log("dispatch(handleSelectAC - weekSelect");
    },
    handleOpen: (whichButton) => {
      // const whichButton = "topicSelect";
      console.log("dispatch(setOpenedAC(", whichButton, "))");
      dispatch(setOpenedAC(whichButton));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
