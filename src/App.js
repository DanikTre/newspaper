import { useRef } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import {
  Wrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./appStyledComponents";

import SideBar from "./components/SideBar/SideBar";
import { RouteStucture } from "./routes/routes";

function App({ currentUser, logInUser, logOutUser }) {
  const { firstName, lastName } = currentUser.user;
  const fullName = firstName + " " + lastName;
  const leftSideRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    leftSideRef &&
      leftSideRef.current &&
      leftSideRef.current.scroll({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <Wrapper>
      <LeftSideWrapper ref={leftSideRef}>
        <RouteStucture />
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
