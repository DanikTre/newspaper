import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainPageContainer from "../containers/mainPage/MainPageContainer.js";
import CardPage from "../containers/cardPage/CardPage.jsx";
import ArtPage from "../containers/artPage/ArtPage";

import AccountImg1 from "../components/SideBar/AvatarImg.png";
import { getPath, VIEW } from "./paths";

export const RouteStucture = ({ store }) => {
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");

  return (
    <>
      <Routes>
        <Route
          exact
          path={getPath(VIEW.MAIN)}
          element={<MainPageContainer />}
        />
        <Route
          path={getPath(VIEW.CARD)}
          element={
            <CardPage
            // cardList={state.cardList}
            // topicOptions={state.topicOptions}
            // weekOptions={state.weekOptions}
            // value1={value1}
            // setValue1={setValue1}
            // value2={value2}
            // setValue2={setValue2}
            />
          }
        />
        <Route
          path={getPath(VIEW.ART)}
          element={
            <ArtPage
            // artPosts={state.artPosts}
            // creatorsToFollow={state.creatorsToFollow}
            // topicOptions={state.topicOptions}
            // weekOptions={state.weekOptions}
            // value1={value1}
            // setValue1={setValue1}
            // value2={value2}
            // setValue2={setValue2}
            />
          }
        />
        <Route
          path={getPath(VIEW.REDIRECT)}
          element={<Navigate to={getPath(VIEW.MAIN)} />}
        />
      </Routes>
    </>
  );
};
