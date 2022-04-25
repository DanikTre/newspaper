import { LeftSideCenteredWrapper } from "./cardPageStyledComponents";

import Header from "../../components/header/Header";
import CardBlock1 from "./components/CardBlock1";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import { useLikeFunctionality } from "../mainPage/useLikeFunctionality";
import { useSaveFunctionality } from "./useSaveFunctionality";

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
  const [likeState, handleLike] = useLikeFunctionality(cardList);
  const [saveState, handleSave] = useSaveFunctionality(cardList);

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
        count={likeState.find((like) => like.id === cardList[1].value).count}
        handleSave={() => handleSave(cardList[1].value)}
        saveState={
          saveState.find((like) => like.id === cardList[1].value).state
        }
      />
      <StrokeButtons />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
