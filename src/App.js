import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import {
  Wrapper,
  LeftSideWrapper,
  RightSideWrapper,
} from "./appStyledComponents";

import AccountImg1 from "./components/SideBar/AvatarImg.png";

import SideBar from "./components/SideBar/SideBar";
import { RouteStucture } from "./routes/routes";

function App() {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <Wrapper>
      <LeftSideWrapper>
        <Router>
          <RouteStucture />
        </Router>
      </LeftSideWrapper>
      <RightSideWrapper>
        <SideBar name="Alex Barsuk" src={AccountImg1} />
      </RightSideWrapper>
    </Wrapper>
  );
}

export default App;
