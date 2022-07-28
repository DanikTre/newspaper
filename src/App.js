import { useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import smoothscroll from "smoothscroll-polyfill";
import {
  Wrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./appStyledComponents";

import SideBar from "./components/SideBar/SideBar";
import { RouteStucture } from "./routes/routes";

function App({ currentUser, sideBarOpen, logInState, logOut }) {
  const { firstName, lastName } = currentUser;
  const fullName = firstName + " " + lastName;
  const leftSideRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    leftSideRef &&
      leftSideRef.current &&
      leftSideRef.current.scroll({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  // useEffect(() => {
  //   smoothscroll.polyfill();
  // });

  return (
    <Wrapper>
      <LeftSideWrapper ref={leftSideRef}>
        <RouteStucture logInState={logInState} />
      </LeftSideWrapper>
      <RightSideWrapper sideBarOpen={sideBarOpen}>
        <SideBar
          logInState={logInState}
          name={fullName}
          avatarImg={currentUser.avatarImg}
          logOut={logOut}
        />
      </RightSideWrapper>
    </Wrapper>
  );
}

export default App;
