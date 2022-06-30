import {
  CenteredWrapper,
  CardsWrapper,
  ColumnCardWrapper,
} from "./mainPageStyledComponents";

import Card from "./components/card/Card";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import HeaderContainer from "../header/HeaderContainer";
import H1Text from "../../components/h1/H1Text";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { deepCopy } from "../../utils/deepCopy";
import { useMemo } from "react";
import { debounce } from "../../utils/throttling";

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
  // const threePartIndex = Math.floor(cardList.length / 3);

  // const thirdPart = cardListCopy.splice(-threePartIndex);
  // const secondPart = cardListCopy.splice(-threePartIndex);
  // const firstPart = cardListCopy;

  const [width, setWidth] = useState(0);
  const [containerNode, setContainerNode] = useState(null);
  const containerRef = useCallback((node) => {
    setContainerNode(node);
  }, []);

  useEffect(() => {
    const handleResize = debounce(() => {
      if (containerNode) {
        setWidth(containerNode.getBoundingClientRect().width);
      }
    });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerNode]);

  const columnWidth = 300;
  const gap = 20;
  const columns = useMemo(() => {
    const cardListCopy = deepCopy(cardList);
    const columnNumber = Math.floor(width / (columnWidth + gap));
    const spliceIndex = Math.floor(cardListCopy.length / columnNumber);
    const startColumns = Array.from({ length: columnNumber }, () => []);
    return startColumns.reduce((acc, currVal, index) => {
      let column;
      if (index < columnNumber - 1) {
        column = cardListCopy.splice(-spliceIndex);
      } else {
        column = cardListCopy;
      }
      return [...acc, column];
    }, []);
  }, [width, cardList]);

  return (
    <CenteredWrapper ref={containerRef}>
      <HeaderContainer SelectButtonsDisplay="block"></HeaderContainer>
      <H1Text>Daily Resources</H1Text>
      <CardsWrapper>
        {columns.map((column, index) => (
          <ColumnCardWrapper
            key={index}
            width={columnWidth + "px"}
            margin="24px"
            gap={gap + "px"}
          >
            {column.map((card) => (
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
        ))}

        <StrokeButtons />
      </CardsWrapper>
    </CenteredWrapper>
  );
};

export default MainPage;
