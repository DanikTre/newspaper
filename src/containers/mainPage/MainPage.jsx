import {
  CenteredWrapper,
  CardsWrapper,
  ColumnCardWrapper,
} from "./mainPageStyledComponents";

import styled from "styled-components";

import Card from "./components/card/Card";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import HeaderContainer from "../header/HeaderContainer";
import H1Text from "../../components/h1/H1Text";

const StyledCard = styled(Card)`
  margin: 0 24px 24px 0;
`;

//
//
const MainPage = ({ cardList, handleLike }) => {
  // CARDS TOPIC FILTER
  // const cardListCopy1 = [...cardList];
  // const politicCards = cardListCopy1.filter(function (card) {
  //   return card.topic === "Politic";
  // });
  // const artCards = cardListCopy1.filter(function (card) {
  //   return card.topic === "Art";
  // });
  // const cultureCards = cardListCopy1.filter(function (card) {
  //   return card.topic === "Culture";
  // });
  // const economicCards = cardListCopy1.filter(function (card) {
  //   return card.topic === "Economic";
  // });
  // const somethingeCards = cardListCopy1.filter(function (card) {
  //   return card.topic === "Something...";
  // });
  // console.log("Politic Cards", politicCards);

  // Card array split
  const cardListCopy2 = [...cardList];
  const threePartIndex = Math.floor(cardList.length / 3);

  const thirdPart = cardListCopy2.splice(-threePartIndex);
  const secondPart = cardListCopy2.splice(-threePartIndex);
  const firstPart = cardListCopy2;

  return (
    <CenteredWrapper>
      <HeaderContainer SelectButtonsDisplay="block"></HeaderContainer>
      <H1Text>Daily Resources</H1Text>
      <CardsWrapper>
        <ColumnCardWrapper width="303px" margin="24px">
          {firstPart.map((card) => (
            <Card
              handleLike={() => handleLike(card.id)}
              likeState={cardList.find((i) => i.id === card.id).likeState}
              likeCount={cardList.find((i) => i.id === card.id).likeCount}
              id={card.id}
              key={card.id}
              name={card.name}
              src={card.src}
              isArticle={!!card.isArticle}
            />
          ))}
        </ColumnCardWrapper>
        <ColumnCardWrapper width="303px" margin="24px">
          {secondPart.map((card) => (
            <StyledCard
              handleLike={() => handleLike(card.id)}
              likeState={cardList.find((i) => i.id === card.id).likeState}
              likeCount={cardList.find((i) => i.id === card.id).likeCount}
              id={card.id}
              key={card.id}
              name={card.name}
              src={card.src}
              isArticle={!!card.isArticle}
            />
          ))}
        </ColumnCardWrapper>
        <ColumnCardWrapper width="437px">
          {thirdPart.map((card) => (
            <Card
              handleLike={() => handleLike(card.id)}
              likeState={cardList.find((i) => i.id === card.id).likeState}
              likeCount={cardList.find((i) => i.id === card.id).likeCount}
              id={card.id}
              key={card.id}
              name={card.name}
              src={card.src}
              isArticle={!!card.isArticle}
            />
          ))}
        </ColumnCardWrapper>
        <StrokeButtons />
      </CardsWrapper>
    </CenteredWrapper>
  );
};

export default MainPage;
