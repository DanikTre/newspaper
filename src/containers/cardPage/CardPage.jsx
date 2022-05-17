import { LeftSideCenteredWrapper } from "./cardPageStyledComponents";

import CardBlock1 from "./components/CardBlock1";
import StrokeButtons from "../../components/strokeButtons/StrokeButtons";
import HeaderContainer from "../header/HeaderContainer";
import H1Text from "../../components/h1/H1Text";

function CardPage({ cardList, handleLike, handleSave }) {
  return (
    <LeftSideCenteredWrapper>
      <HeaderContainer
        SelectButtonsDisplay="block"
        headerText="Daily Resources"
      ></HeaderContainer>
      <H1Text txtdisplay="none" arrowdisplay="block"></H1Text>
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
