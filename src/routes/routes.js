import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import MainPage from "../containers/mainPage/MainPage.jsx";
import CardPage from "../containers/cardPage/CardPage.jsx";
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

import AvatarImg2 from "../containers/artPage/components/assets/AvatarImg2.png";
import AvatarImg3 from "../containers/artPage/components/assets/AvatarImg3.jpg";

import PostImg1 from "../containers/artPage/components/assets/Img1.png";
import PostImg2 from "../containers/artPage/components/assets/Img2.png";
import PostImg3 from "../containers/artPage/components/assets/Img3.jpg";

import AccountImg1 from "../components/SideBar/AvatarImg.png";
import { getPath, VIEW } from "./paths";

export const RouteStucture = () => {
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");

  const topicOptions = [
    { name: "Topic", value: "0" },
    { name: "Politic", value: "1" },
    { name: "Art", value: "2" },
    { name: "Culture", value: "3" },
    { name: "Economic", value: "4" },
    { name: "Something...", value: "5" },
  ];

  const weekOptions = [
    { name: "This Day", value: "0" },
    { name: "This Week", value: "1" },
    { name: "This Month", value: "2" },
    { name: "This Quarter", value: "3" },
    { name: "This Year", value: "4" },
  ];
  const cardList = [
    {
      name: "Connection trust1",
      src: Img1,
      value: "0",
      state: true,
      count: 214,
    },
    {
      name: "Connection trust2",
      src: Img2,
      value: "1",
      state: false,
      count: 29,
    },
    {
      name: "Connection trust3",
      src: Img3,
      value: "2",
      state: true,
      count: 232,
    },
    {
      name: "Connection trust4",
      src: Img4,
      value: "3",
      state: true,
      count: 80,
    },
    {
      name: "Connection trust5",
      src: Img5,
      value: "4",
      state: false,
      count: 212,
    },
    {
      name: "Connection trust6",
      src: Img6,
      value: "5",
      state: true,
      count: 298,
    },
    {
      name: "Connection trust7",
      src: Img7,
      value: "6",
      state: true,
      count: 264,
    },
    {
      name: "Connection trust8",
      src: Img8,
      value: "7",
      state: true,
      count: 173,
    },
    {
      name: "Connection trust9",
      src: Img9,
      value: "8",
      state: false,
      count: 129,
    },
    {
      name: "Connection trust10",
      src: Img10,
      value: "9",
      state: true,
      count: 109,
    },
    {
      name: "Connection trust11",
      src: Img1,
      value: "10",
      state: false,
      count: 163,
    },
    {
      name: "Connection trust12",
      src: Img2,
      value: "11",
      state: true,
      count: 154,
    },
  ];

  const artPosts = [
    {
      h1: "Explain to you",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      value: "0",
      state: true,
      count: 13,
    },
    {
      h1: "Brat, no ne drug",
      text: "Mac Studio is an entirely new Mac desktop. And it all starts with your choice of the ferociously fast M1 Max or the all-new M1 Ultra — the most powerful chip ever in a personal computer.",
      src: PostImg2,
      date: "Mar 02",
      bred: "34 min read",
      value: "1",
      state: true,
      count: 56,
    },
    {
      h1: "Drug, no ne SWAT",
      text: "Simply good people",
      src: PostImg3,
      date: "Jan 21",
      bred: "2 min read",
      value: "2",
      state: false,
      count: 95,
    },
    {
      h1: "Explain to you",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      value: "3",
      state: true,
      count: 147,
    },
    {
      h1: "Explain to youu",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      src: PostImg1,
      date: "Sep 15",
      bred: "11 min read",
      value: "4",
      state: true,
      count: 112,
    },
  ];

  const creatorsToFollow = [
    {
      name: "Harley Spector",
      text: "The master-builder of human happiness...",
      src: AvatarImg2,
      value: "0",
      state: true,
    },
    {
      name: "Lashped Volfovich",
      text: "The master-durilder of human society...",
      src: AvatarImg3,
      value: "1",
      state: false,
    },
    {
      name: "Harley Devidson",
      text: "The master-chef of motor happiness...",
      src: AvatarImg2,
      value: "2",
      state: true,
    },
    {
      name: "James May",
      text: "The of(f) human ...",
      src: AvatarImg2,
      value: "3",
      state: false,
    },
    {
      name: "Kirill Maskim",
      text: "Laster-bodibilder of numeric dignaty...",
      src: AvatarImg3,
      value: "4",
      state: true,
    },
  ];
  return (
    <>
      <Routes>
        <Route
          exact
          path={getPath(VIEW.MAIN)}
          element={
            <MainPage
              value1={value1}
              onChange1={setValue1}
              value2={value2}
              onChange2={setValue2}
              cardList={cardList}
              topicOptions={topicOptions}
              weekOptions={weekOptions}
              AccountImg1={AccountImg1}
            />
          }
        />
        <Route
          path={getPath(VIEW.CARD)}
          element={
            <CardPage
              cardList={cardList}
              topicOptions={topicOptions}
              weekOptions={weekOptions}
              value1={value1}
              setValue1={setValue1}
              value2={value2}
              setValue2={setValue2}
            />
          }
        />
        <Route
          path={getPath(VIEW.ART)}
          element={
            <ArtPage
              artPosts={artPosts}
              creatorsToFollow={creatorsToFollow}
              topicOptions={topicOptions}
              weekOptions={weekOptions}
              value1={value1}
              setValue1={setValue1}
              value2={value2}
              setValue2={setValue2}
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
