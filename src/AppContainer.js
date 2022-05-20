import { connect } from "react-redux";
import App from "./App";
import { logOut } from "./containers/logInPage/LogInPageReducer";

let mapStateToProps = (state) => {
  return {
    logInState: state.LogInPage.logIn.logInState,
    currentUser: state.LogInPage.currentUser,
    sideBarOpen: state.Overall.sideBarOpen,
  };
};

export default connect(mapStateToProps, { logOut })(App);
