import { connect } from "react-redux";
import TestPage from "./TestPage";

import { handleFollow, handleLike } from "../artPage/components/artPageReducer";

let mapStateToProps = (state) => {
  return {
    artPosts: state.ArtPage.artPosts,
    creatorsToFollow: state.ArtPage.creatorsToFollow,
  };
};

export default connect(mapStateToProps, { handleLike, handleFollow })(TestPage);
