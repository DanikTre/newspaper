import { useState } from "react";

import {
  CenteredWrapper,
  CardsWrapper,
  ColumnCardWrapper,
} from "./mainPageStyledComponents";

import styled from "styled-components";

import Header from "../../components/header/Header";
import Card from "./components/card/Card";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";

const StyledCard = styled(Card)`
  margin: 0 24px 24px 0;
`;

//
//
const MainPage = ({ cardList, topicOptions, weekOptions }) => {
  //
  // Select buttons option state

  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");

  // Like button state

  const defaultLikeState = cardList.map((card) => ({
    id: card.value,
    state: card.state,
    count: card.count,
  }));

  const [likeState, setLikeState] = useState(defaultLikeState);
  const [likeCount, setLikeCount] = useState(defaultLikeState);

  const handleLike = (id) => {
    // debugger;
    setLikeState((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      const copy = [...currentState];
      copy[index].state = !copy[index].state;
      return copy;
    });
    setLikeCount((currentState) => {
      const index = currentState.findIndex((el) => el.id === id);
      const copy = [...currentState];
      if (currentState.state === false) {
        copy[index].count = copy[index].count++;
      } else {
        copy[index].count = copy[index].count--;
      }
      return copy;
    });
  };

  // Card array split

  const threePartIndex = Math.floor(cardList.length / 3);

  const thirdPart = cardList.splice(-threePartIndex);
  const secondPart = cardList.splice(-threePartIndex);
  const firstPart = cardList;

  console.log(firstPart);

  return (
    <CenteredWrapper>
      <Header
        SelectButtonsDisplay="block"
        headerText="Daily Resources"
        topicOptions={topicOptions}
        value1={value1}
        onChange1={setValue1}
        options2={weekOptions}
        value2={value2}
        onChange2={setValue2}
      ></Header>
      <CardsWrapper>
        <ColumnCardWrapper width="303px" margin="24px">
          {firstPart.map((i) => (
            <Card
              handleLike={() => handleLike(i.value)}
              state={likeState.find((like) => like.id === i.value).state}
              count={likeCount.find((like) => like.id === i.value).count}
              value={i.value}
              key={i.value}
              name={i.name}
              src={i.src}
            />
          ))}
        </ColumnCardWrapper>
        <ColumnCardWrapper width="303px" margin="24px">
          {secondPart.map((i) => (
            <StyledCard
              handleLike={() => handleLike(i.value)}
              state={likeState.find((like) => like.id === i.value).state}
              count={likeCount.find((like) => like.id === i.value).count}
              value={i.value}
              key={i.value}
              name={i.name}
              src={i.src}
            />
          ))}
        </ColumnCardWrapper>
        <ColumnCardWrapper width="437px">
          {thirdPart.map((i) => (
            <Card
              handleLike={() => handleLike(i.value)}
              state={likeState.find((like) => like.id === i.value).state}
              count={likeCount.find((like) => like.id === i.value).count}
              value={i.value}
              key={i.value}
              name={i.name}
              src={i.src}
            />
          ))}
        </ColumnCardWrapper>
        <StrokeButtons />
      </CardsWrapper>
    </CenteredWrapper>
  );
};

export default MainPage;
