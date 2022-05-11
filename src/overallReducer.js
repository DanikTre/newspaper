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

//import AccountImg1 from "./components/SideBar/AvatarImg.png";
import AccountImg2 from "./components/SideBar/IMG_5141.jpeg";
import AccountImg3 from "./components/SideBar/IMG_5141 copy.jpeg";
import AccountImg4 from "./components/SideBar/birch-tree.jpeg";
// переделать без тире, с нижним _
const HANDLE_LIKE_OVERALL = "HANDLE_LIKE_OVERALL";
const HANDLE_SAVE_OVERALL = "HANDLE_SAVE_OVERALL";
const LOG_IN_USER_OVERALL = "LOG_IN_USER_OVERALL";
const LOG_OUT_USER_OVERALL = "LOG_OUT_USER_OVERALL";
const UPDATE_SEARCH_BAR_TEXT_OVERALL = "UPDATE_SEARCH_BAR_TEXT_OVERALL";
const SEARCH_CLICK_OVERALL = "SEARCH_CLICK_OVERALL";

const initialState = {
  cardList: [
    {
      name: "Connection trust1",
      src: Img1,
      id: 0,
      likeState: true,
      likeCount: 214,
      saveState: true,
      isArticle: true,
      topic: "Art",
      date: "11/06/2021",
    },
    {
      name: "Connection trust2",
      src: Img2,
      id: 1,
      likeState: false,
      likeCount: 29,
      saveState: true,
      topic: "Politic",
      date: "18/06/2021",
    },
    {
      name: "Connection trust3",
      src: Img3,
      id: 2,
      likeState: true,
      likeCount: 232,
      saveState: false,
      topic: "Economic",
      date: "21/08/2021",
    },
    {
      name: "Connection trust4",
      src: Img4,
      id: 3,
      likeState: true,
      likeCount: 80,
      saveState: false,
      topic: "Culture",
      date: "23/09/2021",
    },
    {
      name: "Connection trust5",
      src: Img5,
      id: 4,
      likeState: false,
      likeCount: 212,
      saveState: true,
      isArticle: true,
      topic: "Art",
      date: "13/10/2021",
    },
    {
      name: "Connection trust6",
      src: Img6,
      id: 5,
      likeState: true,
      likeCount: 298,
      saveState: true,
      isArticle: true,
      topic: "Art",
      date: "18/04/2022",
    },
    {
      name: "Connection trust7",
      src: Img7,
      id: 6,
      likeState: true,
      likeCount: 264,
      saveState: false,
      topic: "Politic",
      date: "16/05/2022",
    },
    {
      name: "Connection trust8",
      src: Img8,
      id: 7,
      likeState: true,
      likeCount: 173,
      saveState: true,
      isArticle: true,
      topic: "Culture",
      date: "01/07/2022",
    },
    {
      name: "Connection trust9",
      src: Img9,
      id: 8,
      likeState: false,
      likeCount: 129,
      saveState: true,
      topic: "Economic",
      date: "07/08/2022",
    },
    {
      name: "Connection trust10",
      src: Img10,
      id: 9,
      likeState: true,
      likeCount: 109,
      saveState: false,
      topic: "Something...",
      date: "09/09/2022",
    },
    {
      name: "Connection trust11",
      src: Img1,
      id: 10,
      likeState: false,
      likeCount: 163,
      saveState: false,
      isArticle: true,
      topic: "Art",
      date: "13/09/2022",
    },
    {
      name: "Connection trust12",
      src: Img2,
      id: 11,
      likeState: true,
      likeCount: 154,
      saveState: false,
      topic: "Politic",
      date: "24/12/2021",
    },
  ],
  users: [
    { id: 0, firstName: "Alex", lastName: "Barsuk", avatarImg: AccountImg2 },
    {
      id: 1,
      firstName: "Danon",
      lastName: "Trapachka",
      avatarImg: AccountImg3,
    },
    { id: 2, firstName: "John", lastName: "The Birch", avatarImg: AccountImg4 },
  ],
  currentUser: {
    user: {},
    loginState: false,
  },
  searchBar: {
    currentText: "",
  },
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
    case LOG_IN_USER_OVERALL: {
      // ???? как сделать if и сделать return для case
      if (!state.currentUser.loginState) {
        console.log("Log In");
        const index = state.users.findIndex((el) => el.id === action.id);
        const copy = JSON.parse(JSON.stringify(state.users));
        //console.log(copy[index]);
        return {
          ...state,
          currentUser: {
            user: copy[index],
            loginState: true,
          },
        };
      }
      // ????
      return state;
    }
    case LOG_OUT_USER_OVERALL: {
      if (state.currentUser.loginState) {
        console.log("Log Out");
        return {
          ...state,
          currentUser: {
            user: "",
            loginState: false,
          },
        };
      }
      return state;
    }
    case UPDATE_SEARCH_BAR_TEXT_OVERALL:
      return {
        ...state,
        searchBar: { searchBar: state.searchBar, currentText: action.text },
      };
    case SEARCH_CLICK_OVERALL:
      return {
        ...state,
        searchBar: { searchBar: state.searchBar, currentText: "" },
      };
    default: {
      return state;
    }
  }
};

export const handleLikeAC = (id) => ({
  type: HANDLE_LIKE_OVERALL,
  id,
});
export const handleSaveAC = (id) => ({
  type: HANDLE_SAVE_OVERALL,
  id,
});
export const logInUserAC = (id) => ({
  type: LOG_IN_USER_OVERALL,
  id,
});
export const logOutUserAC = () => ({
  type: LOG_OUT_USER_OVERALL,
});
export const updateSearchBarTextAC = (text) => ({
  type: UPDATE_SEARCH_BAR_TEXT_OVERALL,
  text,
});
export const handleSearchClickAC = () => ({
  type: SEARCH_CLICK_OVERALL,
});

export default OverallReducer;
