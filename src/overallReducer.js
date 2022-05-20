import Img1 from "./containers/mainPage/components/card/assets/CardImg1.png";
import Img2 from "./containers/mainPage/components/card/assets/CardImg2.png";
import Img3 from "./containers/mainPage/components/card/assets/CardImg3.png";
import Img4 from "./containers/mainPage/components/card/assets/CardImg4.png";
import Img5 from "./containers/mainPage/components/card/assets/CardImg5.png";
import Img6 from "./containers/mainPage/components/card/assets/CardImg6.png";
import Img7 from "./containers/mainPage/components/card/assets/CardImg7.png";
import Img8 from "./containers/mainPage/components/card/assets/CardImg8.jpg";
import Img9 from "./containers/mainPage/components/card/assets/CardImg9.jpg";
import Img10 from "./containers/mainPage/components/card/assets/CardImg10.jpg";

const HANDLE_LIKE_OVERALL = "HANDLE_LIKE_OVERALL";
const HANDLE_SAVE_OVERALL = "HANDLE_SAVE_OVERALL";
// const LOG_IN_USER_OVERALL = "LOG_IN_USER_OVERALL";
// const LOG_OUT_USER_OVERALL = "LOG_OUT_USER_OVERALL";
const UPDATE_SEARCH_BAR_TEXT_OVERALL = "UPDATE_SEARCH_BAR_TEXT_OVERALL";
const SEARCH_CLICK_OVERALL = "SEARCH_CLICK_OVERALL";
const FILTER_CARDS_BY_TOPIC_OVERALL = "FILTER_CARDS_BY_TOPIC_OVERALL";
const FILTER_CARDS_BY_WEEK_OVERALL = "FILTER_CARDS_BY_WEEK_OVERALL";

const initialState = {
  cardList: [
    {
      name: "Waterleaves pairt 1",
      src: Img1,
      id: "6283801e5d0eec886ee9f62b",
      likeState: true,
      likeCount: 214,
      saveState: true,
      isArticle: true,
      topic: "Art",
      topicId: "6281247cf6499193ed6efd22",
      date: "6282297eb56ab3572e2d492c",
    },
    {
      name: "Superficiary polonism 2",
      src: Img2,
      id: "62838027236d33a911cb4cf6",
      likeState: false,
      likeCount: 29,
      saveState: true,
      topic: "Politic",
      topicId: "6281247377b190429b07e29a",
      date: "6282228c7ea92d7a118753e7",
    },
    {
      name: "Evg parishionate 3",
      src: Img3,
      id: "6283802e585c3e02f43cde71",
      likeState: true,
      likeCount: 232,
      saveState: false,
      topic: "Economic",
      topicId: "6281248bf4471737167be3ad",
      date: "6282229137fa883039fdeb83",
    },
    {
      name: "Fructiferous irideremia 4",
      src: Img4,
      id: "62838036a3e100ad5a744e66",
      likeState: true,
      likeCount: 80,
      saveState: false,
      topic: "Culture",
      topicId: "6281248373cc3d7b4b94b01e",
      date: "6282228c7ea92d7a118753e7",
    },
    {
      name: "Analysis art 5",
      src: Img5,
      id: "6283803c31dc5b903f403cea",
      likeState: false,
      likeCount: 212,
      saveState: true,
      isArticle: true,
      topic: "Art",
      topicId: "6281247cf6499193ed6efd22",
      date: "62822281a2cb7f5a9e0855f0",
    },
    {
      name: "Reject vigorous 6",
      src: Img6,
      id: "62838045c9cb6a72ef5e0da9",
      likeState: true,
      likeCount: 298,
      saveState: true,
      isArticle: true,
      topic: "Art",
      topicId: "6281247cf6499193ed6efd22",
      date: "62822281a2cb7f5a9e0855f0",
    },
    {
      name: "Meat affair 7",
      src: Img7,
      id: "628380544fd310e64f9e764d",
      likeState: true,
      likeCount: 264,
      saveState: false,
      topic: "Politic",
      topicId: "6281247377b190429b07e29a",
      date: "62822281a2cb7f5a9e0855f0",
    },
    {
      name: "Rob brush 8",
      src: Img8,
      id: "6283805ae4013c463f1a378c",
      likeState: true,
      likeCount: 173,
      saveState: true,
      isArticle: true,
      topic: "Culture",
      topicId: "6281248373cc3d7b4b94b01e",
      date: "62822286bf078a1a50d53a78",
    },
    {
      name: "Tea youth 9",
      src: Img9,
      id: "628380617bb12ea3e4578f35",
      likeState: false,
      likeCount: 129,
      saveState: true,
      topic: "Economic",
      topicId: "6281248bf4471737167be3ad",
      date: "6282229137fa883039fdeb83",
    },
    {
      name: "Inspector championship 10",
      src: Img10,
      id: "628380671303338dc8774a7d",
      likeState: true,
      likeCount: 109,
      saveState: false,
      topic: "Something...",
      topicId: "6281249143b7a30f5e2120e9",
      date: "62822286bf078a1a50d53a78",
    },
    {
      name: "Friendship anxiety 11",
      src: Img1,
      id: "6283806c188a641e3d6bcf6f",
      likeState: false,
      likeCount: 163,
      saveState: false,
      isArticle: true,
      topic: "Art",
      topicId: "6281247cf6499193ed6efd22",
      date: "6282297eb56ab3572e2d492c",
    },
    {
      name: "Education storage 12",
      src: Img2,
      id: "628380731d61249ba33b69ea",
      likeState: true,
      likeCount: 154,
      saveState: false,
      topic: "Politic",
      topicId: "6281247377b190429b07e29a",
      date: "6282229137fa883039fdeb83",
    },
  ],

  searchBar: {
    currentText: "",
  },
  selectedTopicId: null,
  selectedWeekId: null,
  sideBarOpen: false,
};

const OverallReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LIKE_OVERALL: {
      const index = state.cardList.findIndex((el) => el.id === action.id);
      const copy = JSON.parse(JSON.stringify(state.cardList));
      const { likeState } = copy[index];
      const newState = !likeState;
      copy[index].likeState = newState;

      if (!likeState) {
        copy[index].likeCount++;
      } else {
        copy[index].likeCount--;
      }
      return { ...state, cardList: copy };
    }
    case HANDLE_SAVE_OVERALL: {
      const index = state.cardList.findIndex((el) => el.id === action.id);
      const copy = JSON.parse(JSON.stringify(state.cardList));
      const { saveState } = copy[index];
      const newState = !saveState;
      copy[index].saveState = newState;

      return { ...state, cardList: copy };
    }
    // case LOG_IN_USER_OVERALL: {
    //   console.log("almost log in");
    //   if (!state.currentUser.loginState) {
    //     console.log("Log In");
    //     const index = state.users.findIndex((el) => el.id === action.id);
    //     const copy = JSON.parse(JSON.stringify(state.users));

    //     return {
    //       ...state,
    //       currentUser: {
    //         user: copy[index],
    //         loginState: true,
    //       },
    //     };
    //   }

    //   return state;
    // }
    // case LOG_OUT_USER_OVERALL: {
    //   if (state.currentUser.loginState) {
    //     console.log("Log Out");
    //     return {
    //       ...state,
    //       currentUser: {
    //         user: "",
    //         loginState: false,
    //       },
    //     };
    //   }
    //   return state;
    // }
    case UPDATE_SEARCH_BAR_TEXT_OVERALL:
      localStorage.setItem("search", action.text);
      return {
        ...state,
        searchBar: { ...state.searchBar, currentText: action.text },
      };
    case SEARCH_CLICK_OVERALL:
      localStorage.setItem("search", "");
      return {
        ...state,
        searchBar: { ...state.searchBar, currentText: "" },
      };
    case FILTER_CARDS_BY_TOPIC_OVERALL:
      return { ...state, selectedTopicId: action.id };
    case FILTER_CARDS_BY_WEEK_OVERALL:
      return { ...state, selectedWeekId: action.id };
    default: {
      return state;
    }
  }
};

export const handleLike = (id) => ({
  type: HANDLE_LIKE_OVERALL,
  id,
});
export const handleSave = (id) => ({
  type: HANDLE_SAVE_OVERALL,
  id,
});
// export const logInUser = (id) => ({
//   type: LOG_IN_USER_OVERALL,
//   id,
// });
// export const logOutUser = () => ({
//   type: LOG_OUT_USER_OVERALL,
// });
export const updateSearchBarText = (text) => ({
  type: UPDATE_SEARCH_BAR_TEXT_OVERALL,
  text,
});
export const handleSearchClick = () => ({
  type: SEARCH_CLICK_OVERALL,
});
export const handleFilterCardsByTopic = (id) => ({
  type: FILTER_CARDS_BY_TOPIC_OVERALL,
  id,
});
export const handleFilterCardsByWeek = (id) => ({
  type: FILTER_CARDS_BY_WEEK_OVERALL,
  id,
});

export default OverallReducer;
