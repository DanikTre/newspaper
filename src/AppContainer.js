import { connect } from "react-redux";
import App from "./App";
import { logInUserAC, logOutUserAC } from "./overallReducer";

let mapStateToProps = (state) => {
  return {
    currentUser: state.Overall.currentUser,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (id) => {
      dispatch(logInUserAC(id));
    },
    logOutUser: () => {
      dispatch(logOutUserAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
