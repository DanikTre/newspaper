import PostImg1 from "./assets/Img1.png";
import PostImg2 from "./assets/Img2.png";
import PostImg3 from "./assets/Img3.jpg";

import AvatarImg2 from "./assets/AvatarImg2.png";
import AvatarImg3 from "./assets/AvatarImg3.jpg";

const HANDLE_FOLLOW_ART = "HANDLE_FOLLOW_ART";
const HANDLE_LIKE_ART = "HANDLE_LIKE_ART";

const initialState = {
  artPosts: [
    {
      h1: "Explain to you",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      id: "628380c0c91334f6d194f2a7",
      likeState: true,
      likeCount: 13,
    },
    {
      h1: "Brat, no ne drug",
      text: "Mac Studio is an entirely new Mac desktop. And it all starts with your choice of the ferociously fast M1 Max or the all-new M1 Ultra — the most powerful chip ever in a personal computer.",
      src: PostImg2,
      date: "Mar 02",
      bred: "34 min read",
      id: "628380c5fce5cbce5a97fd28",
      likeState: true,
      likeCount: 56,
    },
    {
      h1: "Drug, no ne SWAT",
      text: "Simply good people",
      src: PostImg3,
      date: "Jan 21",
      bred: "2 min read",
      id: "628380ccbf662676251f4aed",
      likeState: false,
      likeCount: 95,
    },
    {
      h1: "Explain to you",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      id: "628380d2ef3a26d4860ca736",
      likeState: true,
      likeCount: 147,
    },
    {
      h1: "Explain to youu",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      id: "628380d9f5724af636f7e5e2",
      likeState: true,
      likeCount: 112,
    },
  ],
  creatorsToFollow: [
    {
      name: "Harley Spector",
      text: "The master-builder of human happiness...",
      src: AvatarImg2,
      id: "628380e4c2146258bc456b9b",
      followState: true,
    },
    {
      name: "Lashped Volfovich",
      text: "The master-durilder of human society...",
      src: AvatarImg3,
      id: "628380e9a0e120ff007b1208",
      followState: false,
    },
    {
      name: "Harley Devidson",
      text: "The master-chef of motor happiness...",
      src: AvatarImg2,
      id: "628380ef1c822f9bca749c30",
      followState: true,
    },
    {
      name: "James May",
      text: "The of(f) human ...",
      src: AvatarImg2,
      id: "628380f4b548f00f0427e764",
      followState: false,
    },
    {
      name: "Kirill Maskim",
      text: "Laster-bodibilder of numeric dignaty...",
      src: AvatarImg3,
      id: "628380f98a9f50729a0cf056",
      followState: true,
    },
  ],
};

const ArtPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FOLLOW_ART: {
      const index = state.creatorsToFollow.findIndex(
        (el) => el.id === action.id
      );
      const copy = JSON.parse(JSON.stringify(state.creatorsToFollow));
      const { followState } = copy[index];
      const newState = !followState;
      copy[index].followState = newState;

      return { ...state, creatorsToFollow: copy };
    }
    case HANDLE_LIKE_ART: {
      const index = state.artPosts.findIndex((el) => el.id === action.id);
      const copy = JSON.parse(JSON.stringify(state.artPosts));
      const { likeState } = copy[index];
      const newState = !likeState;
      copy[index].likeState = newState;

      if (!likeState) {
        copy[index].likeCount++;
      } else {
        copy[index].likeCount--;
      }
      return { ...state, artPosts: copy };
    }
    default: {
      return state;
    }
  }
};

export const handleFollow = (id) => ({
  type: HANDLE_FOLLOW_ART,
  id,
});
export const handleLike = (id) => ({
  type: HANDLE_LIKE_ART,
  id,
});

export default ArtPageReducer;
