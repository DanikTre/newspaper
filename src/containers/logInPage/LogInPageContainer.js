import { connect } from "react-redux";
import LogInPage from "./LogInPage";

import {
  updateEmailTextLogIn,
  nextButtonPressLogIn,
  backButtonPressLogIn,
  updatePassTextLogIn,
  showPasswordToggle,
} from "./LogInPageReducer";

let mapStateToProps = (state) => {
  return {
    logIn: state.LogInPage.logIn,
    preLogInUser: state.LogInPage.preLogInUser,
  };
};

export default connect(mapStateToProps, {
  updateEmailTextLogIn,
  nextButtonPressLogIn,
  backButtonPressLogIn,
  updatePassTextLogIn,
  showPasswordToggle,
})(LogInPage);
