import { Route, Routes, Navigate } from "react-router-dom";

import MainPageContainer from "../containers/mainPage/MainPageContainer.js";
import CardPageContainer from "../containers/cardPage/CardPageContainer.js";
import ArtPageContainer from "../containers/artPage/ArtPageContainer.js";

import { getPath, VIEW } from "./paths";

export const RouteStucture = ({ store }) => {
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
        <Route
          path={getPath(VIEW.REDIRECT)}
          element={<Navigate to={getPath(VIEW.MAIN)} />}
        />
      </Routes>
    </>
  );
};
