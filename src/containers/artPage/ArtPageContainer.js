import { connect } from "react-redux";
import ArtPage from "./ArtPage";
import { handleFollow, handleLike } from "./components/artPageReducer";

let mapStateToProps = (state) => {
  return {
    artPosts: state.ArtPage.artPosts,
    creatorsToFollow: state.ArtPage.creatorsToFollow,
  };
};

export default connect(mapStateToProps, { handleLike, handleFollow })(ArtPage);
