import { useState } from "react";
import { LeftSideCenteredWrapper } from "./cardPageStyledComponents";

import Header from "../../components/header/Header";
import CardBlock1 from "./components/CardBlock1";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";

function CardPage({
  cardList,
  options1,
  value1,
  setValue1,
  options2,
  value2,
  setValue2,
  topicOptions,
  weekOptions,
}) {
  // Like button state, counter

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

  return (
    <LeftSideCenteredWrapper>
      <Header
        topicOptions={topicOptions}
        weekOptions={weekOptions}
        arrowdisplay="block"
        options1={options1}
        value1={value1}
        onChange1={setValue1}
        options2={options2}
        value2={value2}
        onChange2={setValue2}
      ></Header>
      <CardBlock1
        handleLike={() => handleLike(cardList[1].value)}
        state={likeState.find((like) => like.id === cardList[1].value).state}
        count={likeCount.find((like) => like.id === cardList[1].value).count}
      />
      <StrokeButtons />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
