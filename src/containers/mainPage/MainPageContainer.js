import { connect } from "react-redux";
import { handleLike } from "../../overallReducer";

import MainPage from "./MainPage";

let mapStateToProps = (state) => {
  const { cardList, selectedTopicId, selectedWeekId, searchBar } =
    state.Overall;
  // Filter for cards by Topic
  const filteredCardsByTopic = cardList.filter(
    (card) => !selectedTopicId || selectedTopicId === card.topicId
  );

  // const today = new Date();
  // const date =
  //   today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  // const filteredCardsByDate = filteredCardsByTopic.filter(
  //   (card) =>
  // const cardDate = new Date(card.date);
  // if (cardDate.getTime() - 1 >= date.getTime()) {
  //   return cardDate;
  // }
  // );

  // Filter for cards by Date
  const filteredCardsByDate = filteredCardsByTopic.filter(
    (card) => !selectedWeekId || selectedWeekId === card.date
  );
  // Filter for cards by Search
  const filteredCardsBySearch = filteredCardsByDate.filter((card) =>
    card.name.toLowerCase().includes(searchBar.currentText.toLowerCase())
  );
  return {
    cardList: filteredCardsBySearch,
  };
};

export default connect(mapStateToProps, { handleLike })(MainPage);
