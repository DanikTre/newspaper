import {
  CenteredWrapper,
  CardsWrapper,
  ColumnCardWrapper,
} from "./mainPageStyledComponents";

import styled from "styled-components";

import HeaderContainer from "../../components/header/HeaderContainer";
import Card from "./components/card/Card";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";

const StyledCard = styled(Card)`
  margin: 0 24px 24px 0;
`;

//
//
const MainPage = ({ cardList, handleLike }) => {
  // Card array split

  const cardListCopy = [...cardList];
  const threePartIndex = Math.floor(cardList.length / 3);

  const thirdPart = cardListCopy.splice(-threePartIndex);
  const secondPart = cardListCopy.splice(-threePartIndex);
  const firstPart = cardListCopy;

  return (
    <CenteredWrapper>
      <HeaderContainer
        SelectButtonsDisplay="block"
        headerText="Daily Resources"
      ></HeaderContainer>
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
            />
          ))}
        </ColumnCardWrapper>
        <StrokeButtons />
      </CardsWrapper>
    </CenteredWrapper>
  );
};

export default MainPage;
