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

const MainPage = ({
  handleLike,
  likeState,
  headerText,
  options1,
  value1,
  onChange1,
  options2,
  value2,
  onChange2,
  firstPart,
  secondPart,
  thirdPart,
}) => {
  return (
    <CenteredWrapper>
      <Header
        SelectButtonsDisplay="block"
        headerText="Daily Resources"
        options1={options1}
        value1={value1}
        onChange1={onChange1}
        options2={options2}
        value2={value2}
        onChange2={onChange2}
      ></Header>
      <CardsWrapper>
        <ColumnCardWrapper width="303px" margin="24px">
          {firstPart.map((i) => (
            <Card
              handleLike={() => handleLike(i.value)}
              state={likeState.find((like) => like.id === i.value).state}
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
