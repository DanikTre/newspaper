import H1Text from "../../components/h1/H1Text";
import HeaderContainer from "../header/HeaderContainer";
import { LeftSideCenteredWrapper } from "./artStyledComponents";

import ArtPage1 from "./components/ArtPage1";

function ArtPage({ creatorsToFollow, artPosts, handleLike, handleFollow }) {
  return (
    <LeftSideCenteredWrapper>
      <HeaderContainer
        SelectButtonsDisplay="block"
        headerText="Art"
        txtdisplay="block"
        arrowdisplay="block"
      ></HeaderContainer>
      <H1Text arrowdisplay="block">Art</H1Text>
      <ArtPage1
        artPosts={artPosts}
        handleLike={handleLike}
        creatorsToFollow={creatorsToFollow}
        handleFollow={handleFollow}
      />
    </LeftSideCenteredWrapper>
  );
}

export default ArtPage;
