import { Route, Routes, Navigate } from "react-router-dom";

import MainPageContainer from "../containers/mainPage/MainPageContainer.js";
import CardPageContainer from "../containers/cardPage/CardPageContainer.js";
import ArtPageContainer from "../containers/artPage/ArtPageContainer.js";

import { getPath, VIEW } from "./paths";
import LogInPageContainer from "../containers/logInPage/LogInPageContainer.js";
import TestPageContainer from "../containers/testPage/TestPageContainer.jsx";

export const RouteStucture = ({ logInState }) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path={getPath(VIEW.MAIN)}
          element={<MainPageContainer />}
        />
        <Route path={getPath(VIEW.CARD)} element={<CardPageContainer />} />
        <Route path={getPath(VIEW.ART)} element={<ArtPageContainer />} />
        <Route path={getPath(VIEW.TEST)} element={<TestPageContainer />} />
        <Route path={getPath(VIEW.LOGIN)} element={<LogInPageContainer />} />
        <Route
          path={getPath(VIEW.REDIRECT)}
          element={<Navigate to={getPath(VIEW.MAIN)} />}
        />
      </Routes>
    </>
  );
};
