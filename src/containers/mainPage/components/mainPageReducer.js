import Img1 from "./card/assets/CardImg1.png";
import Img2 from "./card/assets/CardImg2.png";
import Img3 from "./card/assets/CardImg3.png";
import Img4 from "./card/assets/CardImg4.png";
import Img5 from "./card/assets/CardImg5.png";
import Img6 from "./card/assets/CardImg6.png";
import Img7 from "./card/assets/CardImg7.png";
import Img8 from "./card/assets/CardImg8.jpg";
import Img9 from "./card/assets/CardImg9.jpg";
import Img10 from "./card/assets/CardImg10.jpg";
import { useLikeFunctionality } from "../useLikeFunctionality";

const HANDLE_LIKE = "HANDLE-LIKE";

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

const MainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LIKE: {
      // const [likeState, handleLike] = useLikeFunctionality(state.cardList);
      // handleLike(action.cardID);
      // likeState ??
      return state.cardList; //???
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
export const [value1, setValue1] = "0";
export const [value2, setValue2] = "0";

export default MainPageReducer;
