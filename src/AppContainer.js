import { connect } from "react-redux";
import App from "./App";
import { logInUser, logOutUser } from "./overallReducer";

let mapStateToProps = (state) => {
  return {
    currentUser: state.Overall.currentUser,
  };
};

export default connect(mapStateToProps, { logInUser, logOutUser })(App);
