import { connect } from "react-redux";
import { handleLikeAC } from "../../overallReducer";
import ArtPage from "./ArtPage";
import { handleFollowAC } from "./components/artPageReducer";

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
