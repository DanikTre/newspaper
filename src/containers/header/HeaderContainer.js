import { connect } from "react-redux";
import {
  handleSearchClickAC,
  updateSearchBarTextAC,
} from "../../overallReducer";

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
    searchBarText: state.Overall.searchBar.currentText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleSelectOption: (whichButton, optionID) => {
      dispatch(handleSelectOptionAC(whichButton, optionID));
    },

    handleOpen: (whichButton) => {
      dispatch(setOpenedAC(whichButton));
    },
    handleSearchBarNewText: (text) => {
      dispatch(updateSearchBarTextAC(text));
    },
    handleSearchClick: () => {
      dispatch(handleSearchClickAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
