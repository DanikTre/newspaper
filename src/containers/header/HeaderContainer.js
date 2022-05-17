import { connect } from "react-redux";
import {
  handleSearchClick,
  updateSearchBarText,
  handleFilterCardsByTopic,
  handleFilterCardsByWeek,
} from "../../overallReducer";

import Header from "./Header";
import { handleSelectOption, setOpened } from "./HeaderReducer";

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

export default connect(mapStateToProps, {
  handleSelectOption,
  setOpened,
  updateSearchBarText,
  handleSearchClick,
  handleFilterCardsByTopic,
  handleFilterCardsByWeek,
})(Header);
