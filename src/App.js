import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import {
  Wrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./appStyledComponents";

import SideBar from "./components/SideBar/SideBar";
import { RouteStucture } from "./routes/routes";

function App({ currentUser, logInUser, logOutUser }) {
  useEffect(() => {
    smoothscroll.polyfill();
  });
  // if (!currentUser.loginState) {
  //   logInUser(1);
  // }
  const fullName = currentUser.user.firstName + " " + currentUser.user.lastName;

  return (
    <Wrapper>
      <LeftSideWrapper>
        <Router>
          <RouteStucture />
        </Router>
      </LeftSideWrapper>
      <RightSideWrapper>
        <SideBar
          name={fullName}
          avatarImg={currentUser.user.avatarImg}
          logOutUser={logOutUser}
          logInUser={logInUser}
        />
      </RightSideWrapper>
    </Wrapper>
  );
}

export default App;
