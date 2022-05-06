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

const HANDLE_LIKE = "HANDLE-LIKE";
const HANDLE_SAVE = "HANDLE-SAVE";

const initialState = {
  cardList: [
    {
      name: "Connection trust1",
      src: Img1,
      id: 0,
      likeState: true,
      likeCount: 214,
      saveState: true,
    },
    {
      name: "Connection trust2",
      src: Img2,
      id: 1,
      likeState: false,
      likeCount: 29,
      saveState: true,
    },
    {
      name: "Connection trust3",
      src: Img3,
      id: 2,
      likeState: true,
      likeCount: 232,
      saveState: false,
    },
    {
      name: "Connection trust4",
      src: Img4,
      id: 3,
      likeState: true,
      likeCount: 80,
      saveState: false,
    },
    {
      name: "Connection trust5",
      src: Img5,
      id: 4,
      likeState: false,
      likeCount: 212,
      saveState: true,
    },
    {
      name: "Connection trust6",
      src: Img6,
      id: 5,
      likeState: true,
      likeCount: 298,
      saveState: true,
    },
    {
      name: "Connection trust7",
      src: Img7,
      id: 6,
      likeState: true,
      likeCount: 264,
      saveState: false,
    },
    {
      name: "Connection trust8",
      src: Img8,
      id: 7,
      likeState: true,
      likeCount: 173,
      saveState: true,
    },
    {
      name: "Connection trust9",
      src: Img9,
      id: 8,
      likeState: false,
      likeCount: 129,
      saveState: true,
    },
    {
      name: "Connection trust10",
      src: Img10,
      id: 9,
      likeState: true,
      likeCount: 109,
      saveState: false,
    },
    {
      name: "Connection trust11",
      src: Img1,
      id: 10,
      likeState: false,
      likeCount: 163,
      saveState: false,
    },
    {
      name: "Connection trust12",
      src: Img2,
      id: 11,
      likeState: true,
      likeCount: 154,
      saveState: false,
    },
  ],
};

const OverallReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LIKE: {
      const index = state.cardList.findIndex((el) => el.id === action.cardID);
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
    case HANDLE_SAVE: {
      const index = state.cardList.findIndex((el) => el.id === action.cardID);
      const copy = JSON.parse(JSON.stringify(state.cardList));
      const { saveState } = copy[index];
      const newState = !saveState;
      copy[index].saveState = newState;

      return { ...state, cardList: copy };
    }
    default: {
      return state;
    }
  }
};

export const handleLikeAC = (cardID) => ({
  type: HANDLE_LIKE,
  cardID,
});
export const handleSaveAC = (cardID) => ({
  type: HANDLE_SAVE,
  cardID,
});
export const [value1, setValue1] = "0";
export const [value2, setValue2] = "0";

export default OverallReducer;