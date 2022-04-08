import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainPage from "../containers/mainPage/MainPage.js";
import CardPage from "../containers/cardPage/CardPage.js";
import ArtPage from "../containers/artPage/ArtPage";

import Img1 from "../containers/mainPage/components/card/assets/CardImg1.png";
import Img2 from "../containers/mainPage/components/card/assets/CardImg2.png";
import Img3 from "../containers/mainPage/components/card/assets/CardImg3.png";
import Img4 from "../containers/mainPage/components/card/assets/CardImg4.png";
import Img5 from "../containers/mainPage/components/card/assets/CardImg5.png";
import Img6 from "../containers/mainPage/components/card/assets/CardImg6.png";
import Img7 from "../containers/mainPage/components/card/assets/CardImg7.png";
import Img8 from "../containers/mainPage/components/card/assets/CardImg8.jpg";
import Img9 from "../containers/mainPage/components/card/assets/CardImg9.jpg";
import Img10 from "../containers/mainPage/components/card/assets/CardImg10.jpg";

import AccountImg1 from "../components/SideBar/AvatarImg.png";
import { getPath, VIEW } from "./paths";

export const RouteStucture = () => {
  const [value1, setValue1] = useState("0");
  const topicOptions = [
    { name: "Topic", value: "0" },
    { name: "Politic", value: "1" },
    { name: "Art", value: "2" },
    { name: "Culture", value: "3" },
    { name: "Economic", value: "4" },
    { name: "Something...", value: "5" },
  ];
  const [value2, setValue2] = useState("0");
  const weekOptions = [
    { name: "This Day", value: "0" },
    { name: "This Week", value: "1" },
    { name: "This Month", value: "2" },
    { name: "This Quarter", value: "3" },
    { name: "This Year", value: "4" },
  ];
  const cardList = [
    { name: "Connection trust1", src: Img1, value: "0", state: true },
    { name: "Connection trust2", src: Img2, value: "1", state: false },
    { name: "Connection trust3", src: Img3, value: "2", state: true },
    { name: "Connection trust4", src: Img4, value: "3", state: true },
    { name: "Connection trust5", src: Img5, value: "4", state: false },
    { name: "Connection trust6", src: Img6, value: "5", state: true },
    { name: "Connection trust7", src: Img7, value: "6", state: true },
    { name: "Connection trust8", src: Img8, value: "7", state: true },
    { name: "Connection trust9", src: Img9, value: "8", state: false },
    { name: "Connection trust10", src: Img10, value: "9", state: true },
    { name: "Connection trust10", src: Img1, value: "10", state: false },
    { name: "Connection trust10", src: Img2, value: "11", state: false },
  ];
  const defaultState = cardList.map((card) => ({
    id: card.value,
    state: card.state,
  }));
  const [likeState, setLikeState] = useState(defaultState);
  const handleLike = (id) => {
    setLikeState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      const copy = [...currentState];
      copy[index].state = !copy[index].state;
      return copy;
    });
  };

  const threePartIndex = Math.floor(cardList.length / 3);

  const thirdPart = cardList.splice(-threePartIndex);
  const secondPart = cardList.splice(-threePartIndex);
  const firstPart = cardList;
  console.log(likeState);
  return (
    <>
      <Routes>
        <Route
          exact
          path={getPath(VIEW.MAIN)}
          element={
            <MainPage
              handleLike={handleLike}
              likeState={likeState}
              options1={topicOptions}
              value1={value1}
              onChange1={setValue1}
              options2={weekOptions}
              value2={value2}
              onChange2={setValue2}
              AccountImg1={AccountImg1}
              firstPart={firstPart}
              secondPart={secondPart}
              thirdPart={thirdPart}
            />
          }
        />
        <Route
          path={getPath(VIEW.CARD)}
          element={
            <CardPage
              options1={topicOptions}
              value1={value1}
              onChange1={setValue1}
              options2={weekOptions}
              value2={value2}
              onChange2={setValue2}
            />
          }
        />
        <Route
          path={getPath(VIEW.ART)}
          element={
            <ArtPage
              options1={topicOptions}
              value1={value1}
              onChange1={setValue1}
              options2={weekOptions}
              value2={value2}
              onChange2={setValue2}
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
