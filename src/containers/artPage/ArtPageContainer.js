import { connect } from "react-redux";
import ArtPage from "./ArtPage";
import { handleFollowAC, handleLikeAC } from "./components/artPageReducer";

let mapStateToProps = (state) => {
  return {
    artPosts: state.ArtPage.artPosts,
    creatorsToFollow: state.ArtPage.creatorsToFollow,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleLike: (id) => {
      console.log("smthn");
      dispatch(handleLikeAC(id));
    },
    handleFollow: (id) => {
      dispatch(handleFollowAC(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtPage);
