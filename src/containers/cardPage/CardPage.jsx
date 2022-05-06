import { LeftSideCenteredWrapper } from "./cardPageStyledComponents";

import CardBlock1 from "./components/CardBlock1";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import HeaderContainer from "../../components/header/HeaderContainer";

function CardPage({ cardList, handleLike, handleSave }) {
  return (
    <LeftSideCenteredWrapper>
      <HeaderContainer
        SelectButtonsDisplay="block"
        headerText="Daily Resources"
      ></HeaderContainer>
      <CardBlock1
        handleLike={() => handleLike(cardList[1].id)}
        likeState={cardList.find((i) => i.id === cardList[1].id).likeState}
        likeCount={cardList.find((i) => i.id === cardList[1].id).likeCount}
        handleSave={() => handleSave(cardList[1].id)}
        saveState={cardList.find((i) => i.id === cardList[1].id).saveState}
      />
      <StrokeButtons />
    </LeftSideCenteredWrapper>
  );
}

export default CardPage;
